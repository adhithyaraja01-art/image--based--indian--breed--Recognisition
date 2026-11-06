import { ClassificationResult, BreedCategory } from '../types/breed';
import { classifyWithPretrainedModel } from './pretrainedVisionModel';

export interface ClassifyImageOptions {
  imageBase64: string;
  mimeType?: string;
  hint?: string;
  category?: BreedCategory | 'All';
  engine?: 'mobilenet' | 'cloud' | 'auto';
  minConfidenceThreshold?: number;
}

/**
 * Ensures an image source (data URI or URL path) is converted to a clean base64 data URI.
 */
async function ensureDataUri(imageSource: string): Promise<string> {
  if (imageSource.startsWith('data:image/')) {
    return imageSource;
  }

  try {
    const res = await fetch(imageSource);
    const blob = await res.blob();
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Failed to convert image to data URI'));
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (err) {
    console.warn('[ClassifierService] Failed to fetch and convert image URL to base64:', err);
    return imageSource;
  }
}

// Session cache for cloud API availability to avoid repetitive network 502s if project lacks paid billing
let isCloudBillingRequired = false;
let cloudUnavailableNotice = '';

function applyThresholdCheck(result: ClassificationResult, threshold: number): ClassificationResult {
  result.confidenceThresholdUsed = threshold;
  if (!result.isUnsupportedAnimal && !result.isForeignBreed && !result.isUnknownBreed) {
    if (result.confidence < threshold) {
      result.identificationStatus = 'uncertain_breed';
      result.isUncertain = true;
      result.statusMessage = 'Breed identification is uncertain. Please upload a clearer image.';
    } else {
      result.identificationStatus = 'identified_indigenous';
      result.statusMessage = 'Supported Indigenous Indian Breed (ICAR-NBAGR Registered)';
    }
  }
  return result;
}

/**
 * Sends image data to classification pipeline.
 * Real AI pipelines only:
 * 1. Google MobileNet v2 Deep Convolutional Neural Network (On-device Edge AI)
 * 2. Cloud Vision AI (Gemini 3.8 Flash via /api/classify)
 * Never replaces AI predictions with fake, mocked, or random results.
 */
export async function classifyBreedImage(options: ClassifyImageOptions): Promise<ClassificationResult> {
  const {
    imageBase64,
    mimeType = 'image/jpeg',
    hint,
    category = 'All',
    engine = 'auto',
    minConfidenceThreshold = 60
  } = options;

  // 1. If user explicitly requested mobilenet on-device pre-trained model:
  if (engine === 'mobilenet') {
    const mobilenetResult = await classifyWithPretrainedModel(imageBase64, hint, category, minConfidenceThreshold);
    return applyThresholdCheck(mobilenetResult, minConfidenceThreshold);
  }

  // 2. Prepare base64 payload for Cloud Vision API
  const preparedImage = await ensureDataUri(imageBase64);

  // 3. If user explicitly requested cloud engine:
  if (engine === 'cloud') {
    const res = await fetch('/api/classify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        imageBase64: preparedImage,
        mimeType,
        hint,
        category,
        minConfidenceThreshold
      })
    });

    const data = await res.json().catch(() => null);

    if (res.ok && data?.success && data?.result) {
      return applyThresholdCheck(data.result as ClassificationResult, minConfidenceThreshold);
    }

    const mobilenetResult = await classifyWithPretrainedModel(imageBase64, hint, category, minConfidenceThreshold);
    return applyThresholdCheck({
      ...mobilenetResult,
      distinguishingNotice: `Identified using on-device Google MobileNet v2 CNN.`
    }, minConfidenceThreshold);
  }

  // 4. Auto Hybrid Engine:
  // If we already detected that Cloud Gemini requires a paid tier for this session, directly run on-device MobileNet v2!
  if (isCloudBillingRequired) {
    const mobilenetResult = await classifyWithPretrainedModel(imageBase64, hint, category, minConfidenceThreshold);
    return applyThresholdCheck({
      ...mobilenetResult,
      distinguishingNotice: `Inference executed using on-device Google MobileNet v2 CNN (Cloud API requires billing upgrade).`
    }, minConfidenceThreshold);
  }

  try {
    const res = await fetch('/api/classify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        imageBase64: preparedImage,
        mimeType,
        hint,
        category,
        minConfidenceThreshold
      })
    });

    const data = await res.json().catch(() => null);

    if (res.ok && data?.success && data?.result) {
      return applyThresholdCheck(data.result as ClassificationResult, minConfidenceThreshold);
    }

    const failReason = data?.details || data?.error || `Status ${res.status}`;
    if (String(failReason).includes('403') || String(failReason).includes('billing')) {
      isCloudBillingRequired = true;
      cloudUnavailableNotice = failReason;
    }

    const mobilenetResult = await classifyWithPretrainedModel(imageBase64, hint, category, minConfidenceThreshold);
    return applyThresholdCheck({
      ...mobilenetResult,
      distinguishingNotice: `Inference executed using on-device Google MobileNet v2 CNN (Cloud Gemini requires billing tier).`
    }, minConfidenceThreshold);
  } catch (err: any) {
    isCloudBillingRequired = true;
    const mobilenetResult = await classifyWithPretrainedModel(imageBase64, hint, category, minConfidenceThreshold);
    return applyThresholdCheck({
      ...mobilenetResult,
      distinguishingNotice: `Inference executed using on-device Google MobileNet v2 CNN (${err?.message || 'Network offline'}).`
    }, minConfidenceThreshold);
  }
}

/**
 * Checks server health and API status.
 */
export async function checkApiHealth(): Promise<{ status: string; hasGeminiKey: boolean }> {
  try {
    const res = await fetch('/api/health');
    if (res.ok) {
      const data = await res.json();
      return { status: 'ok', hasGeminiKey: !!data.hasGeminiKey };
    }
    return { status: 'unreachable', hasGeminiKey: false };
  } catch {
    return { status: 'offline', hasGeminiKey: false };
  }
}
