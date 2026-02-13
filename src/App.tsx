import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menteng from './pages/Menteng';
import Jogja from './pages/Jogja';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menteng" element={<Menteng />} />
        <Route path="/jogja" element={<Jogja />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
