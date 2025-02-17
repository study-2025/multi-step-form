import { useState, useRef, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

type DropdownProps = {
  items: DropdownItem[];
  selected?: DropdownItem;
  onSelect: (item: DropdownItem) => void;
  placeholder?: string;
  className?: string;
};

const Dropdown = ({
  items,
  selected,
  onSelect,
  placeholder = '옵션을 선택하세요',
  className,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item: DropdownItem) => {
    onSelect(item);
    setIsOpen(false);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={twMerge('relative', className)} ref={containerRef}>
      <button
        type="button"
        onClick={handleToggle}
        className="w-full px-4 py-2 border rounded bg-white text-left flex justify-between items-center border-gray-300 h-12"
      >
        <span className="text-[15px]">
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className="w-4 h-4 transform transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border rounded z-10 max-h-60 overflow-auto border-gray-300">
          {items.map((item) => (
            <li
              key={item.value}
              onClick={() => handleSelect(item)}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-[15px]"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
