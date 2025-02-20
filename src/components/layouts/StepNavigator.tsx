import { useMultiStepFormStore } from "../../store/multiStepFormValue"
import { useState } from "react"

import { Button } from "../ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog"

const StepNavigator = () => {
  const { multiStepFormValue, previousPage, nextPage } = useMultiStepFormStore()
  const currentProcess = multiStepFormValue.currentProcess

  const [isOpen, setIsOpen] = useState(false)

  function isValueValid() {
    switch (currentProcess) {
      case 1:
        return multiStepFormValue.name !== ""
      case 2:
        return multiStepFormValue.gender !== ""
      case 3:
        return multiStepFormValue.hobby.length > 0
      case 4:
        return multiStepFormValue.job !== ""
      case 5:
        return multiStepFormValue.intro.length > 5
      default:
        return false
    }
  }

  switch (multiStepFormValue.currentProcess) {
    case 0:
      return <></>
    case 6:
      return <></>
    default:
      return (
        <>
          <div className="h-full flex items-center">
            <div className="w-full flex flex-wrap gap-[10px]">
              <Button
                className={`h-[50px] w-[calc(50%-5px)] rounded-full text-md font-normal`}
                variant={"select"}
                onClick={() => previousPage()}
              >
                이전
              </Button>
              <Button
                className={`h-[50px] w-[calc(50%-5px)] rounded-full text-md font-normal`}
                variant={isValueValid() ? "default" : "disabled"}
                onClick={() => {
                  if (isValueValid() && currentProcess !== 5) nextPage()
                  if (isValueValid() && currentProcess === 5) setIsOpen(true)
                }}
              >
                다음
              </Button>
            </div>
          </div>
          <AlertDialog open={isOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-md">폼을 제출하시겠습니까?</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="text-sm" onClick={() => setIsOpen(false)}>
                  취소
                </AlertDialogCancel>
                <AlertDialogAction
                  className="text-sm"
                  onClick={() => {
                    setIsOpen(false)
                    nextPage()
                  }}
                >
                  제출
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )
  }
}

export default StepNavigator
