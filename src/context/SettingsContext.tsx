import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppSettings, DEFAULT_SETTINGS, ThemeMode, LanguageCode } from '../types/settings';
import { TRANSLATIONS } from '../i18n/translations';

const SETTINGS_STORAGE_KEY = 'indian_bovine_app_settings_v2';

interface SettingsContextType {
  settings: AppSettings;
  updateSettings: (partial: Partial<AppSettings>) => void;
  resetSettings: () => void;
  toggleTheme: () => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  isDarkMode: boolean;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AppSettings>(() => {
    try {
      const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Default strictly to 'light' to prevent OS auto-activating full dark background
        const theme: ThemeMode = parsed.theme === 'dark' ? 'dark' : 'light';
        return { ...DEFAULT_SETTINGS, ...parsed, theme };
      }
    } catch (e) {
      console.warn('Could not load settings from localStorage', e);
    }
    return DEFAULT_SETTINGS;
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Sync settings changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      console.warn('Could not save settings to localStorage', e);
    }
  }, [settings]);

  // Handle theme application on documentElement
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = () => {
      // Only activate dark mode if explicitly chosen by user
      const shouldBeDark = settings.theme === 'dark';

      setIsDarkMode(shouldBeDark);

      if (shouldBeDark) {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    };

    applyTheme();
  }, [settings.theme]);

  // Sync document language and text direction (for Urdu & Kashmiri RTL)
  useEffect(() => {
    const root = document.documentElement;
    root.lang = settings.language;
    if (settings.language === 'ur' || settings.language === 'ks') {
      root.dir = 'rtl';
    } else {
      root.dir = 'ltr';
    }
  }, [settings.language]);

  const updateSettings = (partial: Partial<AppSettings>) => {
    setSettings((prev) => ({ ...prev, ...partial }));
  };

  const toggleTheme = () => {
    setSettings((prev) => ({
      ...prev,
      theme: prev.theme === 'dark' ? 'light' : 'dark'
    }));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    try {
      localStorage.removeItem(SETTINGS_STORAGE_KEY);
    } catch {}
  };

  // Translation helper function
  const t = (key: string, params?: Record<string, string | number>): string => {
    const langDict = TRANSLATIONS[settings.language] || TRANSLATIONS['en'];
    let text = langDict[key] || TRANSLATIONS['en'][key] || key;

    if (params) {
      Object.entries(params).forEach(([paramKey, val]) => {
        text = text.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(val));
      });
    }

    return text;
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        resetSettings,
        toggleTheme,
        t,
        isDarkMode
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
