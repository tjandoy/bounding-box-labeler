import enMessages from './en.json';
import jaMessages from './ja.json';
import { isLocalStorageAvailable } from '../generic';

export const getPhrases = lang => {
  if (lang === 'en') {
    return enMessages;
  }
  if (lang === 'ja') {
    return jaMessages;
  }
  return null;
};

export const messages = {
  en: enMessages,
  ja: jaMessages,
};

export const languagesList = {
  ja: '日本語',
  en: 'English',
};

export const DEFAULT_LOCALE = 'en';
const LOCALE_STORAGE_KEY = 'REMEMBER_LOCALE';

export function getBrowserLocale() {
  const normalizeWithDefault = str => {
    const locale = str.toLowerCase().split(/[_-]+/)[0];
    if (locale in languagesList) {
      return locale;
    }

    return DEFAULT_LOCALE;
  };

  if (isLocalStorageAvailable()) {
    const savedLocale = global.window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (savedLocale) {
      return normalizeWithDefault(savedLocale);
    }
  }
  if (typeof navigator !== 'undefined') {
    if (navigator.languages && navigator.languages[0]) {
      return normalizeWithDefault(navigator.languages[0]);
    }

    if (navigator.language) {
      return normalizeWithDefault(navigator.language);
    }
    if (navigator.userLanguage) {
      return normalizeWithDefault(navigator.userLanguage);
    }
  }

  return DEFAULT_LOCALE;
}

export function saveBrowserLocale(locale) {
  if (isLocalStorageAvailable()) {
    global.window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }
}
