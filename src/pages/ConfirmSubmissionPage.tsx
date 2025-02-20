import { useMultiStepFormStore } from "../store/multiStepFormValue"

import { Button } from "../components/ui/button"

const ConfirmSubmissionPage = () => {
  const { resetState } = useMultiStepFormStore()

  return (
    <div className="h-full flex-center flex-col gap-[50px]">
      <p className="text-lg font-bold">제출이 완료되었어요!</p>

      <Button
        className={`h-[50px] w-[calc(50%-5px)] rounded-full text-md font-normal`}
        onClick={resetState}
      >
        새로 제출하기
      </Button>
    </div>
  )
}

export default ConfirmSubmissionPage
