import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import ComparisonForm from "./features/ComparisonForm";
import ComparisonResults from "./features/ComparisonResults";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/comparisonForm" element={<ComparisonForm />} />
        <Route path="/comparisonForm/comparison-results" element={<ComparisonResults />} />
        <Route path="/comparisonForm/:code1/n/:code2" element={<ComparisonResults />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
