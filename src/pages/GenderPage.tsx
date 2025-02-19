import SelectBox from '../components/common/SelectBox';
import { GENDER } from '../config/constant';
import Main from '../components/layout/Main';
import { useFormStore } from '../store/useFormStore';

const GenderPage = () => {
  const { form, updateField } = useFormStore();

  return (
    <Main title="성별을 선택해주세요">
      <div className="grid grid-cols-2 gap-4">
        {GENDER.map((option) => (
          <SelectBox
            key={option.description}
            icon={option.icon}
            description={option.description}
            selected={form.gender === option.description}
            onClick={(value) => updateField('gender', value)}
          />
        ))}
      </div>
    </Main>
  );
};

export default GenderPage;
