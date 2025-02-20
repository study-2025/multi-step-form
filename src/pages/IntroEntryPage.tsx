import { useMultiStepFormStore } from "../store/multiStepFormValue"

import { Textarea } from "../components/ui/textarea"

const IntroEntryPage = () => {
  const { multiStepFormValue, setValue } = useMultiStepFormStore()

  function handleOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue("intro", e.target.value)
  }

  return (
    <>
      <h2 className="text-lg font-bold text-center">간단한 자기소개를 해주세요</h2>
      <div className="h-full flex items-center">
        <Textarea
          className="h-[300px] text-sm"
          value={multiStepFormValue.intro}
          maxLength={100}
          onChange={handleOnChange}
          placeholder="간단 소개 입력"
        />
      </div>
    </>
  )
}

export default IntroEntryPage
