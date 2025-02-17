import ListBox from '../components/common/ListBox';
import { useFormChange } from '../hooks/useFormChange';

const StartPage = () => {
  const { handleNext } = useFormChange();

  return (
    <main className="flex-grow flex flex-col">
      <div className="text-2xl font-bold text-gray-800 mb-5">
        <p>터치 몇번으로</p>
        <p>끝내는 내 프로필작성</p>
      </div>

      <section className="flex-grow flex flex-col justify-center mb-16">
        <ListBox onClick={handleNext}>시작하기</ListBox>
      </section>
    </main>
  );
};

export default StartPage;
