import { BotaoCadastro, BotaoContainer, BotaoLogin, HeaderContainer, LogoContainer, LogoHeader, NavBar } from "./styleHeader";
import logo from "../../assets/logo2.png";

function HeaderExterno() {
    return (

        <HeaderContainer>
            <LogoContainer>
                <LogoHeader src={logo} alt="Logo" />
            </LogoContainer>


            <NavBar>
                <a href="#home">Home</a>
                <a href="#sobre">Sobre</a>
                <a href="#contato">Valores</a>
            </NavBar>

            <BotaoContainer>
                <BotaoCadastro>Cadastre-se</BotaoCadastro>
                <BotaoLogin>Acessar conta</BotaoLogin>
            </BotaoContainer>
            
        </HeaderContainer>

    );
}

export default HeaderExterno;