import { HeaderContainer, NavLinks, NavLink, LogoutButton, ProfileSection, HeaderWrapper } from "./styleHeaderLogado";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

function HeaderLogado() {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                {/* Botão de Sair */}
                <LogoutButton>
                    <FaSignOutAlt /> Sair
                </LogoutButton>

                {/* Links Centrais */}
                <NavLinks>
                    <NavLink to="/noticias" className={({ isActive }) => (isActive ? "active" : "")}>
                        Notícias
                    </NavLink>
                    <NavLink to="/estoque" className={({ isActive }) => (isActive ? "active" : "")}>
                        Estoque
                    </NavLink>
                    <NavLink to="/doe" className={({ isActive }) => (isActive ? "active" : "")}>
                        Doe
                    </NavLink>
                </NavLinks>

                {/* Perfil à Direita */}
                <ProfileSection>
                    <FaUser /> Perfil
                </ProfileSection>
            </HeaderWrapper>
        </HeaderContainer>
    );
}

export default HeaderLogado;
