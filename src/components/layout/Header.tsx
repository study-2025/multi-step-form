import { useFormStore } from '../../store/useFormStore';
import ProgressBar from '../common/ProgressBar';

const Header = () => {
  const { form, currentStep } = useFormStore();

  const totalSteps = Object.keys(form).length;

  if (currentStep < 1 || currentStep > 5) {
    return <header className="py-10"></header>;
  }

  return (
    <header className="py-10">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
    </header>
  );
};

export default Header;
