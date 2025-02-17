import { twMerge } from 'tailwind-merge';

type PromptProps = {
  title: string;
  subTitle?: string;
  className?: string;
};

const Prompt = ({ title, subTitle, className }: PromptProps) => {
  const mergedClass = twMerge(
    'text-2xl font-bold text-gray-800',
    className
  );

  return (
    <div className={mergedClass}>
      <p>{title}</p>
      {subTitle !== '' && (
        <p className="font-medium text-[15px] text-gray-500">{subTitle}</p>
      )}
    </div>
  );
};

export default Prompt;
