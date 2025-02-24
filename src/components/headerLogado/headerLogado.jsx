import { HeaderContainer, NavLinks, NavLink, LogoutButton, ProfileSection, HeaderWrapper,Perfil } from "./styleHeaderLogado";
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
                         RETIRAR DOAÇÕES
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
