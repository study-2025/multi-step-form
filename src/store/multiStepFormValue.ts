import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface MultiStepFormValue {
  name: string
  gender: "male" | "female" | ""
  job: string
  hobby: string[]
  intro: string
  currentProcess: number
}

const multiStepFormValueDefault: MultiStepFormValue = {
  name: "",
  gender: "",
  job: "",
  hobby: [],
  intro: "",
  currentProcess: 0,
}

export const useMultiStepFormStore = create(
  persist<{
    multiStepFormValue: MultiStepFormValue
    resetState: () => void
    setValue: <K extends keyof MultiStepFormValue>(key: K, value: MultiStepFormValue[K]) => void
    toggleHobby: (value: string) => void
    nextPage: () => void
    previousPage: () => void
  }>(
    (set) => ({
      multiStepFormValue: multiStepFormValueDefault,
      resetState: () => set({ multiStepFormValue: multiStepFormValueDefault }),
      setValue: (key, value) =>
        set((state) => ({
          multiStepFormValue: {
            ...state.multiStepFormValue,
            [key]: value,
          },
        })),
      toggleHobby: (value) =>
        set((state) => {
          const hobby = state.multiStepFormValue.hobby
          return {
            multiStepFormValue: {
              ...state.multiStepFormValue,
              hobby: hobby.includes(value)
                ? hobby.filter((hobby) => hobby !== value)
                : [...hobby, value],
            },
          }
        }),
      nextPage: () =>
        set((state) => ({
          multiStepFormValue: {
            ...state.multiStepFormValue,
            currentProcess: state.multiStepFormValue.currentProcess + 1,
          },
        })),
      previousPage: () =>
        set((state) => ({
          multiStepFormValue: {
            ...state.multiStepFormValue,
            currentProcess: state.multiStepFormValue.currentProcess - 1,
          },
        })),
    }),
    {
      name: "multiStepFormStore",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
