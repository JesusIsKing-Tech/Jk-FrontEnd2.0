import React, { useState, useEffect } from "react";
import HeaderExterno from "../../components/headerExterno/headerExterno";
import { Background, Background2, BackgroundCards, BotaoConheca, CardContainer, ContainerBackground2, ContainerCarrossel2, ContainerCarrossel2Content, ContainerConteudo, ContainerIntegrante, ContainerJesusKing, ContainerTituloCarrossel, ContianerCarrossel, MainContainer, SubTitulo, Titulo } from "./homeStyle";
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
import pibvm from '../../assets/pibvm.jpg';
import allHands from '../../assets/all-hands.jpg';


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
      <section id="home">
        <Background>
          <MainContainer>
            <ContainerConteudo>
              <SubTitulo>Seja bem-vindo ao nosso site!</SubTitulo>
              <Titulo>Quando estiver ao seu alcance, não deixe de fazer o bem a quem é devido.</Titulo>
              <BotaoConheca >Conheça mais</BotaoConheca>
            </ContainerConteudo>
          </MainContainer>
        </Background>
      </section>

      <section id="valores">
        <BackgroundCards id="background-cards" >
          <h1>Nossos valores</h1>

          <CardContainer>
            <CardValores icon={missao} title={"Missão"} value={"Facilitar a gestão de doações de alimentos, automatizando processos para ajudar igrejas a atenderem mais pessoas de forma eficiente e organizada."} />
            <CardValores icon={visao} title={"Visão"} value={"Ser a principal plataforma de apoio para igrejas e organizações no combate à fome, promovendo solidariedade e inovação social."} />
            <CardValores icon={valores} title={"Valores"} value={"Compromisso com a solidariedade, inovação tecnológica para o bem comum e transparência em todas as etapas da gestão de doações."} />
          </CardContainer>


        </BackgroundCards>
      </section>

      <Background2>
        <ContainerBackground2>
          <p>Fomos criados por um Deus grande para fazer boas obras !</p>
        </ContainerBackground2>
      </Background2>

      <section id="sobre">


        <HomeContainer2>
          <ContainerTituloCarrossel>
            {activeSlideIndex === 0 && <h1>Jesus Is King</h1>}
            {activeSlideIndex === 1 && <h1>Principal cliente : PIBVM</h1>}
            {activeSlideIndex === 2 && <h1>Auxilio na Gestão</h1>}

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

          {activeSlideIndex === 1 &&

            <ContainerCarrossel2>
              <h1>PIBVM</h1>

              <ContainerCarrossel2Content>

                <div>
                  <img src={pibvm} />

                </div>
                <p>
                  A Primeira Igreja Batista em Vila Maria (PIBVM) é uma comunidade cristã que, há décadas, atua com compromisso na pregação do evangelho e no cuidado com as pessoas. Localizada na Zona Norte de São Paulo, a PIBVM é reconhecida por sua tradição, valores bíblicos e ações que promovem a comunhão, o crescimento espiritual e o serviço à sociedade. Com uma programação rica em cultos, eventos e ministérios voltados para todas as idades — incluindo crianças, jovens, casais e terceira idade — a igreja continua sendo um espaço acolhedor e relevante para famílias e indivíduos que buscam viver sua fé de forma ativa e transformadora.

                </p>

              </ContainerCarrossel2Content>
            </ContainerCarrossel2>

          }

          {activeSlideIndex === 2 &&

            <ContainerCarrossel2>
              <h1>União</h1>

              <ContainerCarrossel2Content>

                <div>
                  <img src={allHands} />

                </div>
                <p>
                  Quando a igreja se une em amor, grandes coisas acontecem.
                  Cada doação, cada gesto, cada pessoa envolvida faz parte de um só corpo que trabalha com propósito: cuidar dos que mais precisam. Nosso sistema nasce dessa união — uma ferramenta que fortalece a missão, organiza a distribuição e amplia o alcance da solidariedade. Juntos, somos resposta de Deus para quem tem fome, física e espiritual.

                </p>

              </ContainerCarrossel2Content>
            </ContainerCarrossel2>
          }

        </HomeContainer2>
      </section>
    </div>
  );
}

export default Home;