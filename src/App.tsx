import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TelecomPage from './pages/TelecomPage';
import HealthcarePage from './pages/HealthCarePage';


const App: React.FC = () => {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/telecom" element={<TelecomPage />} />
        <Route path="/healthcare" element={<HealthcarePage />} />
      </Routes>
    </Router>
  );
};

export default App;
