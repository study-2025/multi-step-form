import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import EndPage from './pages/EndPage';
import GenderPage from './pages/GenderPage';
import HobbyPage from './pages/HobbyPage';
import IntroductionPage from './pages/IntroductionPage';
import JobPage from './pages/JobPage';
import MyInfoPage from './pages/MyInfoPage';
import NamePage from './pages/NamePage';
import StartPage from './pages/StartPage';
import { useFormStore } from './store/useFormStore';

function App() {
  const { currentStep } = useFormStore();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[420px] h-screen px-5 flex flex-col bg-gray-50">
        <Header />

        {currentStep === 0 && <StartPage />}
        {currentStep === 1 && <NamePage />}
        {currentStep === 2 && <GenderPage />}
        {currentStep === 3 && <JobPage />}
        {currentStep === 4 && <HobbyPage />}
        {currentStep === 5 && <IntroductionPage />}
        {currentStep === 6 && <EndPage />}
        {currentStep === 7 && <MyInfoPage />}

        <Footer />
      </div>
    </div>
  );
}

export default App;
