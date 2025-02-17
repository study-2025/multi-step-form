import { twMerge } from 'tailwind-merge';

type PromptProps = {
  children: string;
  className?: string;
};

const Prompt = ({ children, className }: PromptProps) => {
  const mergedClass = twMerge(
    'text-2xl font-bold text-gray-700 text-center',
    className
  );
  return <p className={mergedClass}>{children}</p>;
};

export default Prompt;
