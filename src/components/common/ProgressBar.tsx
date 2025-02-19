type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
  className?: string;
};

const ProgressBar = ({
  currentStep,
  totalSteps,
  className,
}: ProgressBarProps) => {
  return (
    <div className={`flex gap-2 ${className}`}>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index < currentStep;
        return (
          <div
            key={index}
            className={`flex-1 h-3 rounded transition-colors duration-300 ${
              isActive ? 'bg-blue-500' : 'bg-gray-200'
            }`}
          />
        );
      })}
    </div>
  );
};

export default ProgressBar;
