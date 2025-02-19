import { useState } from 'react';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import s from '../styles.module.css';

const hobbies = [
  '운동',
  '독서',
  '요리',
  '게임',
  '여행',
  '음악',
  '영화',
  '기타',
];

/* 취미 선택 페이지 */

const Hobby = () => {
  const [selected, setSelected] = useState<string[]>(() => {
    const initSelected = localStorage.getItem('hobby');
    return initSelected ? JSON.parse(initSelected) : [];
  });
  const [isDisabled, setIsDisabled] = useState(selected.length === 0);

  //선택된 항목을 newSelected 배열로 관리
  //클릭시 이미 선택된 항목이라면 제거하고, 새로운 항목이라면 선택목록이 3개 미만일때만 추가 가능
  function handleCheck(hobby: string) {
    let newSelected = selected;
    if (selected.includes(hobby)) {
      newSelected = selected.filter((item) => item !== hobby);
    } else if (selected.length < 3) {
      newSelected = [...selected, hobby];
    }

    setSelected(newSelected);
    setIsDisabled(newSelected.length === 0);
    localStorage.setItem('hobby', JSON.stringify(newSelected));
  }
  return (
    <main className={s.container}>
      <h1>취미를 선택해주세요</h1>
      <span>최대 3개 선택 가능</span>
      <div className={s.checkContainer}>
        {hobbies.map((hobby) => (
          <CheckBox
            key={hobby}
            list={hobby}
            isChecked={selected.includes(hobby)}
            onChange={() => handleCheck(hobby)}
          />
        ))}
      </div>
      <div className={s.btnContainer}>
        <Button type={'prev'}>이전</Button>
        <Button type={'next'} isDisabled={isDisabled}>
          다음
        </Button>
      </div>
    </main>
  );
};

export default Hobby;
