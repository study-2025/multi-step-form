interface FormInfoData {
  name: string;
  gender: string;
  job: string;
  hobby: string[];
  selfIntroduction: string;
}

interface FormStore {
  form: FormInfoData;
  currentStep: number;
  setForm: (newForm: FormInfoData) => void;
  updateField: (field: keyof FormInfoData, value: string) => void;
  toggleHobby: (hobby: string) => void;
  setCurrentStep: (step: number) => void;
  resetForm: () => void;
}

interface PersistedFormState {
  state: {
    currentStep: number;
    form: FormInfoData;
  };
  version?: number;
}
