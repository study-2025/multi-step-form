import { useMultiStepFormStore } from "../store/multiStepFormValue"

import { Input } from "../components/ui/input"

const NameEntryPage = () => {
  const { multiStepFormValue, setValue } = useMultiStepFormStore()

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue("name", e.target.value)
  }

  return (
    <>
      <h2 className="text-lg font-bold text-center">이름을 입력해주세요</h2>
      <div className="h-full flex items-center">
        <Input
          className="text-center"
          value={multiStepFormValue.name}
          onChange={handleOnChange}
          placeholder="이름 입력"
        />
      </div>
    </>
  )
}

export default NameEntryPage
