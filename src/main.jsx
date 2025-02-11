import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import Home from "./pages/home/home";
import Estoque from "./pages/estoque/estoque";
// import Noticias from "./pages/noticias/noticias";
// import Doe from "./pages/doe/doe";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/noticias" element={<Noticias />} /> */}
        <Route path="/estoque" element={<Estoque />} />
        {/* <Route path="/doe" element={<Doe />} /> */}
      </Routes>
    </Router>
  </StrictMode>
);
