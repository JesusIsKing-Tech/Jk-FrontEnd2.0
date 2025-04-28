import React, { useState, useEffect } from "react";
import HeaderExterno from "../../components/headerExterno/headerExterno";
import { Background, Background2, BackgroundCards, BotaoConheca, CardContainer, ContainerBackground2, ContainerConteudo, ContainerIntegrante, ContainerJesusKing, ContainerTituloCarrossel, ContianerCarrossel, MainContainer, SubTitulo, Titulo } from "./homeStyle";
import { HomeContainer2 } from "./homeStyle";
import image from '../../assets/background-home.png';
import { use } from "react";
import CardValores from "../../components/cardValores/CardValores";
import missao from "../../assets/missao.svg";
import visao from "../../assets/visao.svg";
import valores from "../../assets/valores.svg";
import CarrosselHome from "../../components/carrosselHome/CarrosselHome";

// import de imagens

import marcelo from '../../assets/Marcelo.jpg';
import gustavo from '../../assets/Gustavo.png';
import marcos from '../../assets/Marcos.png';
import renan from '../../assets/Renan.jpg';
import pablo from '../../assets/Pablo.jpg';
import kaua from '../../assets/Kaua.png';

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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
          <CardValores icon={missao} title={"Missão"} value={"Facilitar a gestão de doações de alimentos, automatizando processos para ajudar igrejas a atenderem mais pessoas de forma eficiente e organizada."} />
          <CardValores icon={visao} title={"Visão"} value={"Ser a principal plataforma de apoio para igrejas e organizações no combate à fome, promovendo solidariedade e inovação social."} />
          <CardValores icon={valores} title={"Valores"} value={"Compromisso com a solidariedade, inovação tecnológica para o bem comum e transparência em todas as etapas da gestão de doações."} />
        </CardContainer>


      </BackgroundCards>

      <Background2>
        <ContainerBackground2>
          <p>Fomos criados por um Deus grande para fazer boas obras !</p>
        </ContainerBackground2>
      </Background2>

      <HomeContainer2>
        <ContainerTituloCarrossel>
          {activeSlideIndex === 0 && <h1>Jesus Is King</h1>}
          {activeSlideIndex === 1 && <h1>Principal cliente : PIBVM</h1>}
          {activeSlideIndex === 2 && <h1>Objetivos ONU</h1>}
          {activeSlideIndex === 3 && <h1>Auxilio na Gestão</h1>}

          {activeSlideIndex === 0 && <p>A Jesus Is King foi fundada com a intenção de auxiliar e facilitar
            o processo de gestãode estoque e doações de cestas basicas</p>}
          {activeSlideIndex === 1 && <p>Atualmente, nosso principal cliente é a Primeira Igreja Batista em Vila Maria, uma igreja tradicional que tem a família como foco central. Sempre atenta às necessidades das famílias, a igreja se dedica a cuidar e apoiar aqueles que precisam.</p>}
          {activeSlideIndex === 2 && <p>Desenvolvemos nosso projeto alinhado aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU, promovendo impacto positivo e transformação social. Nosso compromisso é combater a pobreza, a fome e as desigualdades, sempre visando um futuro mais justo e sustentável.</p>}
          {activeSlideIndex === 3 && <p>Nosso sistema otimiza o controle de estoque e a distribuição de cestas básicas, oferecendo monitoramento de produtos, gestão de beneficiários e geração de relatórios para uma operação ágil e transparente</p>}

        </ContainerTituloCarrossel>
        <CarrosselHome onSlideChange={setActiveSlideIndex} />

        {activeSlideIndex === 0 &&
          <ContainerJesusKing>
            <div class="content1">
              <h1>Integrantes</h1>


              <ContainerIntegrante>
                <div class="integrante">
                  <img src={marcelo} />
                  <p>Marcelo Araujo</p>
                  <p>Gerente</p>
                </div>
                <div class="integrante">
                  <img src={kaua} />
                  <p>Kauã Vidal</p>
                  <p>Desenvolvedor</p>
                </div>
                <div class="integrante">
                  <img src={renan} />
                  <p>Renan Alves</p>
                  <p>Desenvolvedor</p>
                </div>
                <div class="integrante">
                  <img src={gustavo} />
                  <p>Gustavo Bueno</p>
                  <p>Desenvolvedor</p>
                </div>
                <div class="integrante">
                  <img src={marcos} />
                  <p>Marcos Vinicius</p>
                  <p>Desenvolvedor</p>
                </div>
                <div class="integrante">
                  <img src={pablo} />
                  <p>Pablo Vinicius</p>
                  <p>Devops</p>
                </div>
              </ContainerIntegrante>

            </div>

            <div class="content2">
              <h1>Jesus Is King: Tecnologia a Serviço da Solidariedade</h1>

              <p>Jesus Is King é uma plataforma de gestão de doações de alimentos que tem como objetivo facilitar o processo de arrecadação, armazenamento e distribuição de cestas básicas para igrejas e organizações sociais. Nosso sistema oferece um controle eficiente de estoque, monitoramento de produtos e gestão de beneficiários, garantindo uma operação ágil e transparente.</p>  
            </div>
          </ContainerJesusKing>
        }
        {activeSlideIndex === 1 && <h1>Slide 2</h1>}
        {activeSlideIndex === 2 && <h1>Slide 3</h1>}
        {activeSlideIndex === 3 && <h1>Slide 4</h1>}

      </HomeContainer2>
    </div>
  );
}

export default Home;