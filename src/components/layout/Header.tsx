import { gradientOptions } from '../../config/colorStyles';
import { useFormStore } from '../../store/useFormStore';
import { useGradientStore } from '../../store/useGradientStore';
import ProgressBar from '../common/ProgressBar';

const Header = () => {
  const { form, currentStep } = useFormStore();
  const { selectedGradientId, setSelectedGradientId } = useGradientStore();

  const totalSteps = Object.keys(form).length;

  if (currentStep === 7) {
    return (
      <div className="mt-8 flex gap-4 justify-center">
        {gradientOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedGradientId(option.id)}
            className={`w-10 h-10 rounded-full border ${
              selectedGradientId === option.className
                ? 'border-gray-500'
                : 'border-gray-300'
            } ${option.className}`}
          />
        ))}
      </div>
    );
  }

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
