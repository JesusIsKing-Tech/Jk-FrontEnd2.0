import React, { useState, useEffect } from "react";
import HeaderExterno from "../../components/headerExterno/headerExterno";
import {Background, Background2, BackgroundCards, BotaoConheca, CardContainer, ContainerBackground2, ContainerConteudo, MainContainer, SubTitulo, Titulo}  from "./homeStyle";
import {HomeContainer2} from "./homeStyle";
import image from '../../assets/background-home.png';
import { use } from "react";
import CardValores from "../../components/cardValores/CardValores";
import missao from "../../assets/missao.svg";
import visao from "../../assets/visao.svg";
import valores from "../../assets/valores.svg";
import CarrosselHome from "../../components/carrosselHome/CarrosselHome";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const backgroundCards = document.getElementById("background-cards");
      if (backgroundCards) {

        const rect = backgroundCards.getBoundingClientRect();
        const isVisible = rect.top <= 50;
        
        setIsScrolled(isVisible);
      }
    };
    
    console.log(isScrolled);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div>
        <HeaderExterno isScrolled={isScrolled} />
        <Background>
          <MainContainer>
              <ContainerConteudo>
                <SubTitulo>Seja bem-vindo ao nosso site!</SubTitulo>
                <Titulo>Quando estiver ao seu alcance, não deixe de fazer o bem a quem é devido.</Titulo>
                <BotaoConheca >Conheça mais</BotaoConheca>
              </ContainerConteudo>
          </MainContainer>
        </Background>

        <BackgroundCards id="background-cards" >
          <h1>Nossos valores</h1>

          <CardContainer>
          <CardValores icon={missao} title={"Missão"} value={"Facilitar a gestão de doações de alimentos, automatizando processos para ajudar igrejas a atenderem mais pessoas de forma eficiente e organizada."}/>
          <CardValores icon={visao} title={"Visão"} value={"Ser a principal plataforma de apoio para igrejas e organizações no combate à fome, promovendo solidariedade e inovação social."}/>
          <CardValores icon={valores} title={"Valores"} value={"Compromisso com a solidariedade, inovação tecnológica para o bem comum e transparência em todas as etapas da gestão de doações."}/>
          </CardContainer>


        </BackgroundCards>

        <Background2>
          <ContainerBackground2>
            <p>Fomos criados por um Deus grande para fazer boas obras !</p>
          </ContainerBackground2>
        </Background2>

        <HomeContainer2> 
          <div>oi</div>
          <CarrosselHome></CarrosselHome>
        </HomeContainer2>
    </div>
  );
}

export default Home;