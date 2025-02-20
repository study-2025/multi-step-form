import { useMultiStepFormStore } from "../store/multiStepFormValue"

import SelectableButton from "../components/layouts/SelectableButton"

const HobbySelectionPage = () => {
  const { multiStepFormValue, toggleHobby } = useMultiStepFormStore()

  const hobbyOptions = [
    { value: "독서" },
    { value: "운동" },
    { value: "요리" },
    { value: "음악 감상" },
    { value: "게임" },
    { value: "여행" },
    { value: "사진 촬영" },
    { value: "기타" },
  ]

  return (
    <>
      <h2 className="text-lg font-bold text-center">취미를 선택해주세요</h2>
      <SelectableButton
        options={hobbyOptions}
        selectedValue={multiStepFormValue.hobby}
        onSelect={toggleHobby}
      />
    </>
  )
}

export default HobbySelectionPage
