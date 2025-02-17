import Input from '../components/common/Input';
import Main from '../components/layout/Main';
import { useFormChange } from '../hooks/useFormChange';
import { useFormStore } from '../store/useFormStore';

const NamePage = () => {
  const { form } = useFormStore();
  const { handleChange } = useFormChange();

  return (
    <Main title="이름을 입력해주세요">
      <Input name="name" value={form.name} onChange={handleChange} />
    </Main>
  );
};

export default NamePage;
