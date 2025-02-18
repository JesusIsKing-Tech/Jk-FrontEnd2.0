import { HeaderContainer, NavLinks, NavLink, LogoutButton, ProfileSection, HeaderWrapper } from "./styleHeaderLogado";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

function HeaderLogado() {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                {/* Botão de Sair */}
                <LogoutButton>
                    <FaSignOutAlt /> SAIR
                </LogoutButton>

                {/* Links Centrais */}
                <NavLinks>
                    <NavLink to="/noticias" className={({ isActive }) => (isActive ? "active" : "")}>
                            NOTÍCIAS
                    </NavLink>
                    <NavLink to="/estoque" className={({ isActive }) => (isActive ? "active" : "")}>
                        ESTOQUE
                    </NavLink>
                    <NavLink to="/doe" className={({ isActive }) => (isActive ? "active" : "")}>
                        DOE
                    </NavLink>
                </NavLinks>

                {/* Perfil à Direita */}
                <ProfileSection>
                    <FaUser /> PERFIL
                </ProfileSection>
            </HeaderWrapper>
        </HeaderContainer>
    );
}

export default HeaderLogado;
