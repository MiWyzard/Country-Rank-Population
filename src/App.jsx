import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import News from "./pages/News";
import Home from "./pages/Home";
import Compare from "./features/ComparationForm"
import ComparisonResults from "./features/ComparisonResults"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/compare/results" element={<ComparisonResults />} /> {/* Routing untuk ComparisonResults */}
        <Route path="/compare/:code1/n/:code2" element={<ComparisonResults />} /> {/* Rute dinamis */}
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
