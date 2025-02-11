import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contrat from "./pages/Contrat";
import ContratDetails from "./pages/ContratDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contrat" element={<Contrat />} />
        <Route
          path="/ContratDetails/:contractId"
          element={<ContratDetails />}
        />{" "}
        {/* Route avec un paramètre contractId */}
      </Routes>
    </Router>
  );
};

export default App;
