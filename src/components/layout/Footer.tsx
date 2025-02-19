import { useFormChange } from '../../hooks/useFormChange';
import { useFormStore } from '../../store/useFormStore';
import { useImageExportStore } from '../../store/useImageExportStore';
import Button from '../common/Button';

const Footer = () => {
  const { form, currentStep, resetForm } = useFormStore();
  const { handleNext, handlePrev } = useFormChange();

  const isNextDisabled = () => {
    if (currentStep === 1) {
      return !form.name.trim();
    } else if (currentStep === 2) {
      return !form.gender.trim();
    } else if (currentStep === 3) {
      return !form.job.trim();
    } else if (currentStep === 4) {
      return form.hobby.length === 0;
    } else if (currentStep === 5) {
      return form.selfIntroduction.trim().length < 10;
    }
    return false;
  };

  const handleSaveAsImage = useImageExportStore(
    (state) => state.handleSaveAsImage
  );

  if (currentStep === 0) {
    return <footer className="flex py-10"></footer>;
  }

  if (currentStep === 6) {
    return (
      <footer className="flex py-10">
        <Button fullWidth onClick={handleNext}>
          확인
        </Button>
      </footer>
    );
  }

  if (currentStep === 7) {
    return (
      <footer className="flex gap-2 py-10">
        <Button fullWidth onClick={resetForm} color="lightBlue">
          다시 작성하기
        </Button>
        <Button fullWidth onClick={handleSaveAsImage}>
          이미지저장
        </Button>
      </footer>
    );
  }

  return (
    <footer className="flex gap-2 py-10">
      <Button color="lightBlue" fullWidth onClick={handlePrev}>
        이전
      </Button>
      <Button fullWidth onClick={handleNext} disabled={isNextDisabled()}>
        다음
      </Button>
    </footer>
  );
};

export default Footer;
