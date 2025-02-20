import { useMultiStepFormStore } from "../../store/multiStepFormValue"

import { Progress } from "../ui/progress"

const ProgressIndicator = () => {
  const { multiStepFormValue } = useMultiStepFormStore()
  const currentProcess = multiStepFormValue.currentProcess

  return (
    currentProcess !== 0 &&
    currentProcess !== 6 && <Progress max={6} value={multiStepFormValue.currentProcess} />
  )
}

export default ProgressIndicator
