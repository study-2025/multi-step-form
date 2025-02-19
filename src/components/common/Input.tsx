import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ label, error, className, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-1 text-gray-700 font-medium" htmlFor={rest.id}>
          {label}
        </label>
      )}
      <input
        className={twMerge(
          'px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600 h-12 bg-white',
          error ? 'border-red-500' : 'border-gray-300',
          className
        )}
        {...rest}
      />
      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default Input;
