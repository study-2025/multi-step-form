import { useLocation, useNavigate } from 'react-router';
import s from '../styles.module.css';
import { ReactNode } from 'react';

type BtnProps = {
  type: string;
  children: ReactNode;
  isDisabled?: boolean;
};

const pages = ['/', '/name', '/gender', '/job', '/hobby', '/summary'];

/* 버튼 컴포넌트 */
/* type에 따라 이전 혹은 다음 페이지로 경로를 변경합니다.
/* isDisabled 상태에 따라 다음 버튼의 활성화 여부가 결정됩니다.
*/

const Button = ({ type, children, isDisabled = false }: BtnProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  function moveNextPage() {
    const currentPage = pages.indexOf(location.pathname);

    if (currentPage === pages.length - 1) {
      //마지막 페이지 제출 처리
      alert('제출이 완료되었어요!');
      localStorage.clear();
      navigate('/');
    } else {
      navigate(pages[currentPage + 1]);
    }
  }

  function handleClick() {
    if (type === 'prev') {
      navigate(-1);
    } else {
      moveNextPage();
    }
  }

  return (
    <button className={s.button} onClick={handleClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
