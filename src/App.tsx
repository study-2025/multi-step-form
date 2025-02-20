import { useMultiStepFormStore } from "./store/multiStepFormValue"

import ProgressIndicator from "./components/layouts/ProgressIndicator"
import MainPage from "./pages/MainPage"
import NameEntryPage from "./pages/NameEntryPage"
import GenderSelectionPage from "./pages/GenderSelectionPage"
import HobbySelectionPage from "./pages/HobbySelectionPage"
import JobSelectionPage from "./pages/JobSelectionPage"
import IntroEntryPage from "./pages/IntroEntryPage"
import ConfirmSubmissionPage from "./pages/ConfirmSubmissionPage"
import StepNavigator from "./components/layouts/StepNavigator"

const App = () => {
  const { multiStepFormValue } = useMultiStepFormStore()

  const pages = [
    <MainPage />,
    <NameEntryPage />,
    <GenderSelectionPage />,
    <HobbySelectionPage />,
    <JobSelectionPage />,
    <IntroEntryPage />,
    <ConfirmSubmissionPage />,
  ]

  return (
    <div className="w-screen h-screen bg-accent">
      <div className="min-w-[375px] max-w-[500px] h-full p-[20px] m-auto bg-white">
        <header className="h-[10%]">
          <ProgressIndicator />
        </header>
        <main className="h-[70%]">{pages[multiStepFormValue.currentProcess]}</main>
        <nav className="h-[20%]">
          <StepNavigator />
        </nav>
      </div>
    </div>
  )
}

export default App
