import SelectBox from '../components/common/SelectBox';
import { HOBBY } from '../components/constant/constant';
import Main from '../components/layout/Main';
import { useFormStore } from '../store/useFormStore';

const HobbyPage = () => {
  const { form, toggleHobby } = useFormStore();

  return (
    <Main title="취미를 선택해주세요" subTitle="(최대 3개 선택가능)">
      <div className="grid grid-cols-2 gap-4 mb-[-40px]">
        {HOBBY.map((option) => (
          <SelectBox
            key={option.description}
            icon={option.icon}
            description={option.description}
            selected={form.hobby.includes(option.description)}
            onClick={(value) => toggleHobby(value)}
            size="sm"
          />
        ))}
      </div>
    </Main>
  );
};

export default HobbyPage;
