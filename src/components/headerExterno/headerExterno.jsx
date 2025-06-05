import { BotaoCadastro, BotaoContainer, BotaoLogin, HeaderContainer, LogoContainer, LogoHeader, NavBar } from "./styleHeader";
import logo2 from "../../assets/logo2.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function HeaderExterno({ isScrolled }) {
    console.warn(isScrolled)

    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <LogoContainer>
                <LogoHeader src={isScrolled ? logo : logo2} alt="Logo" />
            </LogoContainer>


            <NavBar isScrolled={isScrolled}>
                <a href="#home">Home</a>
                <a href="#valores">Valores</a>  
                <a href="#sobre">Sobre</a>
            </NavBar>

            <BotaoContainer>
                <BotaoCadastro onClick={() => navigate("/cadastro")}>Cadastre-se</BotaoCadastro>
                <BotaoLogin isScrolled={isScrolled} onClick={() => navigate("/login")} >Acessar conta</BotaoLogin>
            </BotaoContainer>
            
        </HeaderContainer>

    );
}

export default HeaderExterno;