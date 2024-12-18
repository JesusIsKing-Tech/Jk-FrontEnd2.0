import { BotaoCadastro, BotaoContainer, BotaoLogin, HeaderContainer, LogoContainer, LogoHeader, NavBar } from "./styleHeader";
import logo2 from "../../assets/logo2.png";
import logo from "../../assets/logo.png";

function HeaderExterno({ isScrolled }) {
    console.warn(isScrolled)
    return (
        <HeaderContainer>
            <LogoContainer>
                <LogoHeader src={isScrolled ? logo : logo2} alt="Logo" />
            </LogoContainer>


            <NavBar isScrolled={isScrolled}>
                <a href="#home">Home</a>
                <a href="#contato">Valores</a>  
                <a href="#sobre">Sobre</a>
            </NavBar>

            <BotaoContainer>
                <BotaoCadastro>Cadastre-se</BotaoCadastro>
                <BotaoLogin isScrolled={isScrolled} >Acessar conta</BotaoLogin>
            </BotaoContainer>
            
        </HeaderContainer>

    );
}

export default HeaderExterno;