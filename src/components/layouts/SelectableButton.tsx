import { Button } from "../ui/button"

interface SelectableButtonProps {
  options: { value: string }[]
  selectedValue: string[] | string
  onSelect: (value: string) => void
}

const SelectableButton = ({ options, selectedValue, onSelect }: SelectableButtonProps) => {
  return (
    <div className="h-full flex-center">
      <div className="w-full flex flex-wrap gap-[10px]">
        {options.map((option) => (
          <Button
            key={option.value}
            className={`h-[50px] w-[calc(50%-5px)] rounded-full text-md font-normal`}
            variant={
              typeof selectedValue === "string"
                ? selectedValue === option.value
                  ? "focus"
                  : "select"
                : selectedValue.includes(option.value)
                  ? "focus"
                  : "select"
            }
            onClick={() => onSelect(option.value)}
          >
            {option.value}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default SelectableButton
