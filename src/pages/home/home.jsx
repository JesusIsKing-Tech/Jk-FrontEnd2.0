import HeaderExterno from "../../components/headerExterno/headerExterno";
import {Background, BotaoConheca, ContainerConteudo, HomeContainer, MainContainer, SubTitulo, Titulo}  from "./homeStyle";
import {HomeContainer2} from "./homeStyle";
import image from '../../assets/background-home.png';

function Home() {
  return (
    <div>
        <HeaderExterno/>
        <Background style={{ backgroundImage: `url(${image})` }}>
          <MainContainer>
              <ContainerConteudo>
                <SubTitulo>Seja bem-vindo ao nosso site!</SubTitulo>
                <Titulo>Quando estiver ao seu alcance, não deixe de fazer o bem a quem é devido.</Titulo>
                <BotaoConheca>Conheça mais</BotaoConheca>
              </ContainerConteudo>
          </MainContainer>
        </Background>

        <HomeContainer></HomeContainer>
        <HomeContainer2></HomeContainer2>
    </div>
  );
}

export default Home;