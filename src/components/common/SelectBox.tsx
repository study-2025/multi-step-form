type SelectBoxProps = {
  icon: string;
  description: string;
  selected?: boolean;
  size?: 'sm' | 'md';
  onClick: (value: string) => void;
};

const SelectBox = ({
  icon,
  description,
  selected = false,
  size = 'md',
  onClick,
}: SelectBoxProps) => {
  const boxSizeClasses = size === 'md' ? 'w-26 h-26' : 'w-20 h-20';
  const textSizeClasses = size === 'md' ? 'text-5xl' : 'text-4xl';

  return (
    <div className="flex flex-col items-center">
      <div
        className={`${boxSizeClasses} flex items-center justify-center rounded-lg border-2 transition-colors duration-200 cursor-pointer ${
          selected ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-white'
        }`}
        onClick={() => onClick(description)}
      >
        <span className={textSizeClasses}>{icon}</span>
      </div>
      <p className="text-sm font-medium text-gray-600">{description}</p>
    </div>
  );
};

export default SelectBox;
