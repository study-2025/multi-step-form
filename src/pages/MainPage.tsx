import { useMultiStepFormStore } from "../store/multiStepFormValue"
import { Button } from "../components/ui/button"

const MainPage = () => {
  const { nextPage } = useMultiStepFormStore()

  return (
    <div className="h-full flex-center flex-col gap-[100px]">
      <p className="text-lg font-bold">폼 작성하러 가기</p>

      <Button className={`h-[100px] w-[calc(50%-5px)] text-md font-normal`} onClick={nextPage}>
        작성하기
      </Button>
    </div>
  )
}

export default MainPage
