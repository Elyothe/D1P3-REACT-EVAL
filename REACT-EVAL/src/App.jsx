import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contrat from "./pages/Contrat";
import ContratDetails from "./pages/ContratDetails";
import NewContract from "./pages/NewContract";

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
        <Route path="/NewContract" element={<NewContract />} />
      </Routes>
    </Router>
  );
};

export default App;
