import { LAST_STEP } from '../components/constant/constant';
import { formSchema } from './schema';

export const formStorage = {
  getItem: (name: string): string | null => {
    try {
      const sessionData = sessionStorage.getItem(name);
      const localData = localStorage.getItem(name);
      const data = sessionData || localData;

      if (!data) return null;

      const parsed = JSON.parse(data);

      formSchema.parse(parsed.state.form);

      return data;
    } catch {
      sessionStorage.removeItem(name);
      localStorage.removeItem(name);
      return null;
    }
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
