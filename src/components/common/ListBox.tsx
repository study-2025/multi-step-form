import { ButtonHTMLAttributes } from 'react';

interface ListBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

const ListBox = ({ children, disabled = false, ...rest }: ListBoxProps) => {
  return (
    <button
      className={`w-full h-20 rounded-2xl flex items-center justify-center px-5 hover:bg-blue-100 cursor-pointer ${
        disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-sky-100'
      }`}
      {...rest}
    >
      <p
        className={`text-xl font-[500] ${
          disabled ? 'text-gray-400' : 'text-gray-700'
        }`}
      >
        {children}
      </p>
    </button>
  );
};

export default ListBox;
