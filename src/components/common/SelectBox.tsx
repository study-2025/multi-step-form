type SelectBoxProps = {
  icon: string;
  description: string;
  selected?: boolean;
  onClick?: () => void;
};

const SelectBox = ({
  icon,
  description,
  selected = false,
  onClick,
}: SelectBoxProps) => {
  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`w-26 h-26 flex items-center justify-center rounded-lg border-2 transition-colors duration-200 ${
          selected ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-white'
        }`}
      >
        <span className="text-5xl">{icon}</span>
      </div>
      <p className="text-sm font-medium text-gray-600">{description}</p>
    </div>
  );
};

export default SelectBox;
