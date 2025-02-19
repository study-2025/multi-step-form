import { useEffect, useState } from 'react';
import Button from '../components/Button';
import s from '../styles.module.css';

/* 이름 입력 페이지 */
/* 입력값에 debounce를 적용해 불필요하게 모든 입력에 대해 스토리지 업데이트를 하지 않도록 했습니다.
 */

const Summary = () => {
  const [summary, setSummary] = useState(() => {
    return localStorage.getItem('summary') || '';
  });
  const [inputCount, setInputCount] = useState(summary.length);

  useEffect(() => {
    const debouncedSummary = setTimeout(() => {
      localStorage.setItem('summary', summary);
    }, 1000);

    return () => clearInterval(debouncedSummary);
  }, [summary]);

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputCount(e.target.value.length);
    setSummary(e.target.value);
  }

  return (
    <main className={s.container}>
      <h1>자기소개를 해주세요</h1>
      <div>
        <textarea
          maxLength={99}
          placeholder="간단한 자기소개를 입력해주세요"
          onChange={handleInput}
          rows={10}
          cols={30}
          value={summary}
        />
        <p>{inputCount}/100</p>
      </div>
      <div className={s.btnContainer}>
        <Button type={'prev'}>이전</Button>
        <Button type={'next'} isDisabled={inputCount < 1}>
          완료
        </Button>
      </div>
    </main>
  );
};

export default Summary;
