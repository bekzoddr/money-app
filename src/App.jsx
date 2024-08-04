import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";
import Analysis from "./pages/analysis/index";
import Budgets from "./pages/budgets/index";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/budgets" element={<Budgets />} />
      </Routes>
    </div>
  );
}

export default App;
