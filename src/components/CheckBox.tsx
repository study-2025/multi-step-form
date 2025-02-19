type CheckBoxProps = {
  list: string;
  isChecked: boolean;
  onChange: () => void;
};

/* 취미 체크박스 컴포넌트 */
/* 체크박스 목록명과 선택여부를 전달받아 표시합니다.*/

const CheckBox = ({ list, isChecked, onChange }: CheckBoxProps) => {
  return (
    <div>
      <input
        type="checkbox"
        id={list}
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor={list}>{list}</label>
    </div>
  );
};

export default CheckBox;
