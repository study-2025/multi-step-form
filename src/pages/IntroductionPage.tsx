import TextArea from '../components/common/TextArea';
import Main from '../components/layout/Main';
import { useFormChange } from '../hooks/useFormChange';
import { useFormStore } from '../store/useFormStore';

const IntroductionPage = () => {
  const { form } = useFormStore();
  const { handleChange } = useFormChange();

  return (
    <Main title="간단한 자기소개를 입력해주세요" subTitle='(최소 10자)'>
      <TextArea
        name="selfIntroduction"
        value={form.selfIntroduction}
        onChange={handleChange}
        maxLength={100}
      />
    </Main>
  );
};

export default IntroductionPage;
