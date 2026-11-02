import {
  collection,
  doc,
  setDoc,
  getDocs,
  deleteDoc,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import { db, auth, handleFirestoreError, OperationType } from './config';
import { ClassificationResult, BreedCategory } from '../types/breed';

export interface SavedScanDoc {
  id: string;
  userId: string;
  userEmail?: string;
  breedName: string;
  vernacularName?: string;
  category: BreedCategory;
  scientificName: string;
  confidence: number;
  stateOfOrigin: string;
  homeTract: string;
  utility: string;
  nbagrCode: string;
  notes?: string;
  timestamp: number;
}

export interface ProjectObservationDoc {
  id: string;
  userId: string;
  title: string;
  breedName: string;
  location: string;
  fieldNotes: string;
  timestamp: number;
}

/**
 * Saves a classification scan to Firestore `scans` collection for the authenticated student.
 */
export async function saveScanToFirestore(
  result: ClassificationResult,
  notes: string = ''
): Promise<SavedScanDoc | null> {
  const user = auth.currentUser;
  if (!user) return null;

  const scanId = `scan-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const docPath = `scans/${scanId}`;

  const scanData: SavedScanDoc = {
    id: scanId,
    userId: user.uid,
    userEmail: user.email || '',
    breedName: result.predictedBreed,
    vernacularName: result.vernacularName,
    category: result.category,
    scientificName: result.scientificName,
    confidence: result.confidence,
    stateOfOrigin: result.stateOfOrigin,
    homeTract: result.homeTract,
    utility: result.utility,
    nbagrCode: result.nbagrCode || 'NBAGR-IND-BOV',
    notes: notes.slice(0, 1000),
    timestamp: Date.now()
  };

  try {
    await setDoc(doc(db, 'scans', scanId), scanData);
    return scanData;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, docPath);
    return null;
  }
}

/**
 * Retrieves the student's project scans from Firestore.
 */
export async function fetchUserScans(): Promise<SavedScanDoc[]> {
  const user = auth.currentUser;
  if (!user) return [];

  const path = 'scans';
  try {
    const q = query(
      collection(db, 'scans'),
      where('userId', '==', user.uid),
      limit(50)
    );
    const snap = await getDocs(q);
    const docs = snap.docs.map((d) => d.data() as SavedScanDoc);
    // Sort client-side by timestamp descending
    return docs.sort((a, b) => b.timestamp - a.timestamp);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
    return [];
  }
}

/**
 * Deletes a scan record.
 */
export async function deleteUserScan(scanId: string): Promise<boolean> {
  const user = auth.currentUser;
  if (!user) return false;

  const path = `scans/${scanId}`;
  try {
    await deleteDoc(doc(db, 'scans', scanId));
    return true;
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
    return false;
  }
}

/**
 * Saves a student field/project observation.
 */
export async function saveObservationToFirestore(
  title: string,
  breedName: string,
  location: string,
  fieldNotes: string
): Promise<ProjectObservationDoc | null> {
  const user = auth.currentUser;
  if (!user) return null;

  const obsId = `obs-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const path = `observations/${obsId}`;

  const obsData: ProjectObservationDoc = {
    id: obsId,
    userId: user.uid,
    title: title.slice(0, 200),
    breedName: breedName.slice(0, 128),
    location: location.slice(0, 256),
    fieldNotes: fieldNotes.slice(0, 2000),
    timestamp: Date.now()
  };

  try {
    await setDoc(doc(db, 'observations', obsId), obsData);
    return obsData;
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
    return null;
  }
}

/**
 * Retrieves student observations.
 */
export async function fetchUserObservations(): Promise<ProjectObservationDoc[]> {
  const user = auth.currentUser;
  if (!user) return [];

  const path = 'observations';
  try {
    const q = query(
      collection(db, 'observations'),
      where('userId', '==', user.uid),
      limit(50)
    );
    const snap = await getDocs(q);
    const docs = snap.docs.map((d) => d.data() as ProjectObservationDoc);
    return docs.sort((a, b) => b.timestamp - a.timestamp);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
    return [];
  }
}

export interface FavoriteBreedDoc {
  id: string;
  userId: string;
  breedId: string;
  breedName: string;
  category: BreedCategory;
  stateOfOrigin?: string;
  timestamp: number;
}

/**
 * Toggles a bookmarked indigenous breed in Firestore for the current user.
 */
export async function toggleFavoriteBreedInFirestore(
  breedId: string,
  breedName: string,
  category: BreedCategory,
  stateOfOrigin: string = ''
): Promise<{ isFavorited: boolean }> {
  const user = auth.currentUser;
  if (!user) return { isFavorited: false };

  const sanitizedBreedId = breedId.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
  const path = `users/${user.uid}/favorites/${sanitizedBreedId}`;

  try {
    const existingFavorites = await fetchUserFavorites();
    const isAlreadyFavorited = existingFavorites.some((f) => f.breedId === sanitizedBreedId);

    if (isAlreadyFavorited) {
      await deleteDoc(doc(db, 'users', user.uid, 'favorites', sanitizedBreedId));
      return { isFavorited: false };
    } else {
      const favDoc: FavoriteBreedDoc = {
        id: sanitizedBreedId,
        userId: user.uid,
        breedId: sanitizedBreedId,
        breedName: breedName.slice(0, 128),
        category,
        stateOfOrigin: stateOfOrigin.slice(0, 128),
        timestamp: Date.now()
      };
      await setDoc(doc(db, 'users', user.uid, 'favorites', sanitizedBreedId), favDoc);
      return { isFavorited: true };
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
    return { isFavorited: false };
  }
}

/**
 * Fetches all bookmarked favorite breeds for the current user.
 */
export async function fetchUserFavorites(): Promise<FavoriteBreedDoc[]> {
  const user = auth.currentUser;
  if (!user) return [];

  const path = `users/${user.uid}/favorites`;
  try {
    const snap = await getDocs(collection(db, 'users', user.uid, 'favorites'));
    const docs = snap.docs.map((d) => d.data() as FavoriteBreedDoc);
    return docs.sort((a, b) => b.timestamp - a.timestamp);
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
    return [];
  }
}
