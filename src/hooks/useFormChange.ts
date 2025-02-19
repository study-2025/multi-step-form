import { useCallback } from 'react';
import { useFormStore } from '../store/useFormStore';

export const useFormChange = () => {
  const { currentStep, updateField, setCurrentStep } = useFormStore(
    (state) => state
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      updateField(name as keyof FormInfoData, value);
    },
    [updateField]
  );

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return { handleChange, handleNext, handlePrev };
};
