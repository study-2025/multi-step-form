import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
const Main = lazy(() => import('./pages/Main'));
const Name = lazy(() => import('./pages/Name'));
const Gender = lazy(() => import('./pages/Gender'));
const Job = lazy(() => import('./pages/Job'));
const Hobby = lazy(() => import('./pages/Hobby'));
const Summary = lazy(() => import('./pages/Summary'));

import ProgressBar from './components/ProgressBar';
import './global.css';

function App() {
  return (
    <Suspense fallback={<p>loading</p>}>
      <BrowserRouter>
        <ProgressBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/name" element={<Name />} />
          <Route path="/gender" element={<Gender />} />
          <Route path="/job" element={<Job />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
