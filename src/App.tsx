import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import QuienesSomos from "./pages/QuienesSomos";
import SedesHorarios from "./pages/SedesHorarios";
import Sugerencias from "./pages/Sugerencias";
import Auth from "./auth/Auth";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienessomos" element={<QuienesSomos />} />
        <Route path="/sedesyhorarios" element={<SedesHorarios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sugerencias" element={<Sugerencias />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
