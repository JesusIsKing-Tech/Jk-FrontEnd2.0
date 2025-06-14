import { useNavigate } from "react-router-dom";
import { HeaderContainer, NavLinks, NavLink, LogoutButton, ProfileSection, HeaderWrapper,Perfil } from "./styleHeaderLogado";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

function HeaderLogado() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear()
        navigate("/");
    }

    return (
        <HeaderContainer>
            <HeaderWrapper>
                {/* Botão de Sair */}
                <LogoutButton onClick={handleLogout}>
                    <FaSignOutAlt /> SAIR
                </LogoutButton>

                {/* Links Centrais */}
                <NavLinks>
                    {/* <NavLink to="/noticias" className={({ isActive }) => (isActive ? "active" : "")}>
                            NOTÍCIAS
                    </NavLink> */}
                    <NavLink to="/estoque" className={({ isActive }) => (isActive ? "active" : "")}>
                        ESTOQUE
                    </NavLink>
                    <NavLink to="/doe" className={({ isActive }) => (isActive ? "active" : "")}>
                         RETIRAR DOAÇÕES
                    </NavLink>
                    <NavLink to="/painel" className={({ isActive }) => (isActive ? "active" : "")}>
                         PAINEL
                    </NavLink>
                </NavLinks>

                <ProfileSection>
                    <Perfil to ="/perfil" className={({ isActive }) => (isActive ? "active" : "")}>
                    <FaUser /> PERFIL
                    </Perfil>
                </ProfileSection>
            </HeaderWrapper>
        </HeaderContainer>
    );
}

export default HeaderLogado;
