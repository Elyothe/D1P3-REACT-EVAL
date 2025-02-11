import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contrat from "./pages/Contrat";
import ContratDetails from "./pages/ContratDetails";
import NewContract from "./pages/NewContract";
import ChangeContrat from "./pages/ChangeContrat";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contrat" element={<Contrat />} />
        <Route path="/ContratDetails" element={<ContratDetails />} />
        <Route path="/NewContract" element={<NewContract />} />
        <Route path="/ChangeContrat" element={<ChangeContrat />} />
      </Routes>
    </Router>
  );
};
export default App;
