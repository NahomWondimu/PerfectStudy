import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GenCards from './pages/GenCards';
import FaynmenHome from './pages/FaynemanHome';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gen" element={<GenCards />} />
        <Route path= "/FaynHome" element={<FaynmenHome/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;