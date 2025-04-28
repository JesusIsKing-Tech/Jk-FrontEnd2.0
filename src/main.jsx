import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import Home from "./pages/home/home";
import Estoque from "./pages/estoque/estoque";
// import Noticias from "./pages/noticias/noticias";
import Doe from "./pages/retirar doacoes/doe";
import Perfil from "./pages/perfil/perfil"
import Painel from "./pages/painel/painel"
// import Noticias from "./pages/noticias/Noticias";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/noticias" element={<Noticias />} /> */}
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/doe" element={<Doe />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/painel" element={<Painel />} />
        {/* <Route path="/noticias" element={<Noticias />} /> */}
      </Routes>
    </Router>
  </StrictMode>
);
