import { useMultiStepFormStore } from "../store/multiStepFormValue"

import { Button } from "../components/ui/button"

const GenderSelectionPage = () => {
  const { multiStepFormValue, setValue } = useMultiStepFormStore()

  return (
    <>
      <h2 className="text-lg font-bold text-center">성별을 선택해주세요</h2>
      <div className="h-full flex items-center">
        <div className="w-full flex flex-wrap gap-[10px]">
          <Button
            className={`h-[50px] w-[calc(50%-5px)] rounded-full text-md font-normal`}
            variant={multiStepFormValue.gender === "male" ? "focus" : "select"}
            onClick={() => setValue("gender", "male")}
          >
            남자
          </Button>
          <Button
            className={`h-[50px] w-[calc(50%-5px)] rounded-full text-md font-normal`}
            variant={multiStepFormValue.gender === "female" ? "focus" : "select"}
            onClick={() => setValue("gender", "female")}
          >
            여자
          </Button>
        </div>
      </div>
    </>
  )
}

export default GenderSelectionPage
