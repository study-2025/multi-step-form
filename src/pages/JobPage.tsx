import Dropdown from '../components/common/Dropdown';
import { JOB } from '../config/constant';
import Main from '../components/layout/Main';
import { useFormStore } from '../store/useFormStore';

const JobPage = () => {
  const { form, updateField } = useFormStore();

  return (
    <Main title="직군을 선택해주세요">
      <Dropdown
        items={JOB}
        selected={JOB.find((item) => item.value === form.job)}
        onSelect={(item) => updateField('job', item.value)}
      />
    </Main>
  );
};

export default JobPage;
