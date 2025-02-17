import { LAST_STEP } from '../components/constant/constant';

export const formStorage = {
  getItem: (name: string): string | null => {
    return sessionStorage.getItem(name) || localStorage.getItem(name);
  },
  setItem: (name: string, value: string): void => {
    try {
      const persisted: PersistedFormState = JSON.parse(value);
      if (persisted.state.currentStep >= LAST_STEP) {
        localStorage.setItem(name, value);
        sessionStorage.removeItem(name);
      } else {
        sessionStorage.setItem(name, value);
        localStorage.removeItem(name);
      }
    } catch {
      sessionStorage.setItem(name, value);
    }
  },
  removeItem: (name: string): void => {
    sessionStorage.removeItem(name);
    localStorage.removeItem(name);
  },
};
