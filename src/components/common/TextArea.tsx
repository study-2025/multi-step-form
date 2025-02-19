import { TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  label?: string;
}

const TextArea = ({
  label,
  className,
  maxLength,
  value,
  onChange,
  ...rest
}: TextAreaProps) => {
  const handleInternalChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (maxLength !== undefined && value.length > maxLength) {
      return;
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-1 text-gray-700 font-medium" htmlFor={rest.id}>
          {label}
        </label>
      )}
      <textarea
        onChange={handleInternalChange}
        value={value}
        className={twMerge(
          'text-[15px] px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300 bg-white text-gray-600 h-25',
          className
        )}
        maxLength={maxLength}
        {...rest}
      />
      <div className="flex justify-end items-center mt-1 mr-1">
        {maxLength !== undefined && (
          <span className="text-sm text-gray-500">
            {value.length} / {maxLength}자
          </span>
        )}
      </div>
    </div>
  );
};

export default TextArea;
