import Prompt from '../common/Prompt';

type MainProps = {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
};

const Main = ({ title, subTitle, children }: MainProps) => {
  return (
    <main className="flex-grow flex flex-col">
      <Prompt className="py-5" title={title} subTitle={subTitle} />
      <section className="flex-grow flex flex-col justify-center mb-10">
        {children}
      </section>
    </main>
  );
};

export default Main;
