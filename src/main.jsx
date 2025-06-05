import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CadastroProvider } from './pages/cadastro/CadastroContext';
import GlobalStyles from "./styles/globalStyles";
import Home from "./pages/home/home";
import Estoque from "./pages/estoque/estoque";
// import Noticias from "./pages/noticias/noticias";
import Doe from "./pages/retirar doacoes/doe";
import Perfil from "./pages/perfil/perfil"
import Painel from "./pages/painel/painel"
import Cadastro from './pages/cadastro/Cadastro'
import Login from "./pages/login/Login.jsx";
import { AuthProvider } from "./pages/login/AuthContext.jsx";
// import Noticias from "./pages/noticias/Noticias";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <GlobalStyles />
      <CadastroProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/noticias" element={<Noticias />} /> */}
            <Route path="/estoque" element={<Estoque />} />
            <Route path="/doe" element={<Doe />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/painel" element={<Painel />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />

            {/* <Route path="/noticias" element={<Noticias />} /> */}
          </Routes>
        </AuthProvider>
      </CadastroProvider>
    </Router>
  </StrictMode>
);
