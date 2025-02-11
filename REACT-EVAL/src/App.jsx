import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contrat from "./pages/Contrat";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contrat" element={<Contrat />} />
      </Routes>
    </Router>
  );
};

export default App;
