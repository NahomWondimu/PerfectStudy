import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GenCards from './pages/GenCards';
import FaynmenHome from './pages/FaynemanHome';
import FeynmanEnd from './pages/FeynmanEnd';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path= "/" element={<HomePage />} />
        <Route path= "/gen" element={<GenCards />} />
        <Route path= "/FeynHome" element={<FaynmenHome/>}/>
        <Route path= "/FeynEnd" element={<FeynmanEnd/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;