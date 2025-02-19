import { useState } from 'react';
import Button from '../components/Button';
import s from '../styles.module.css';

/* 직군 선택 페이지 */
/* select, option 태그를 사용해 드롭다운을 구현하였습니다.
/* 기본값인 '선택' 상태일 경우 다음페이지로 넘어갈 수 없습니다.
*/

const Job = () => {
  const [selected, setSelected] = useState(() => {
    return localStorage.getItem('job') || '선택';
  });
  const [isDisabled, setIsDisabled] = useState(selected === '선택');

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setIsDisabled(e.target.value === '선택');
    setSelected(e.target.value);
    localStorage.setItem('job', e.target.value);
  }
  return (
    <main className={s.container}>
      <h1>직군을 선택해주세요</h1>
      <select defaultValue={selected} name="jobs" onChange={handleSelect}>
        <option value="선택">선택</option>
        <option value="프론트엔드">프론트엔드</option>
        <option value="백엔드">백엔드</option>
        <option value="iOS">iOS</option>
        <option value="안드로이드">안드로이드</option>
        <option value="Devops">Devops</option>
      </select>
      <div className={s.btnContainer}>
        <Button type={'prev'}>이전</Button>
        <Button type={'next'} isDisabled={isDisabled}>
          다음
        </Button>
      </div>
    </main>
  );
};

export default Job;
