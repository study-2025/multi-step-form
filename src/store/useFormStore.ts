import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { formStorage } from '../utils/utils';

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      form: {
        name: '',
        gender: '',
        job: '',
        hobby: [],
        selfIntroduction: '',
      },
      currentStep: 0,
      setForm: (newForm) => set({ form: newForm }),
      updateField: (field, value) =>
        set((state) => ({
          form: { ...state.form, [field]: value },
        })),
      toggleHobby: (hobby: string) =>
        set((state) => {
          const currentHobbies = state.form.hobby;
          if (currentHobbies.includes(hobby)) {
            return {
              form: {
                ...state.form,
                hobby: currentHobbies.filter((h) => h !== hobby),
              },
            };
          } else {
            if (currentHobbies.length < 3) {
              return {
                form: {
                  ...state.form,
                  hobby: [...currentHobbies, hobby],
                },
              };
            }
          }
          return state;
        }),
      setCurrentStep: (step: number) => set({ currentStep: step }),
      resetForm: () =>
        set({
          form: {
            name: '',
            gender: '',
            job: '',
            hobby: [],
            selfIntroduction: '',
          },
          currentStep: 1,
        }),
    }),
    {
      name: 'form-storage',
      storage: createJSONStorage(() => formStorage),
    }
  )
);
