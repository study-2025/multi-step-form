import { useMultiStepFormStore } from "../store/multiStepFormValue"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"

const JobSelectionPage = () => {
  const { multiStepFormValue, setValue } = useMultiStepFormStore()

  const jobOptions = [
    { value: "프론트엔드" },
    { value: "백엔드" },
    { value: "개발PM" },
    { value: "데이터엔지니어" },
    { value: "머신러닝" },
    { value: "정보보안" },
  ]

  return (
    <>
      <h2 className="text-lg font-bold text-center">취미를 선택해주세요</h2>
      <div className="h-full flex items-center">
        <Select onValueChange={(value: string) => setValue("job", value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={multiStepFormValue.job || "직군"} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>직군</SelectLabel>
              {jobOptions.map((jobOption) => (
                <SelectItem value={jobOption.value}>{jobOption.value}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  )
}

export default JobSelectionPage
