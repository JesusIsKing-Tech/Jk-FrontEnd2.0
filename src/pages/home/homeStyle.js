import styled from 'styled-components';
import image from '../../assets/background-home.png';
import image2 from '../../assets/background-home2.png';


export const HomeContainer2 = styled.div`

    @media (max-height: 768px){
        height: 175vh;
    }

    background-color: white;
    width: 100vw;
    height: 140vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    

    `;


export const Background = styled.div`
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
    `;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 50rem;
    width: 100%;
    padding: 2rem;
    margin: 5%;
    
    
    @media (max-width: 1366px){
        height: 35rem;
    }
    `;

export const ContainerConteudo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    height: 100%;
    width: 50%;
    
    padding: 2rem;
    
    `;

export const SubTitulo = styled.p`
    font-size: 2rem;
    color: white;
    font-family: "Roboto Condensed", serif;
    font-weight: 300;
    
    text-align: flex-start;
    
    
    @media (max-width: 1366px){
        font-size: 1.3rem;
    }
    
    `;

export const Titulo = styled.h1`
    font-size: 4.5rem;
    color: white;
    font-family: "Roboto Condensed", serif;
    font-weight: bold;
    margin-bottom: 3rem;
    
    
    
    @media (max-width: 1366px){
        font-size: 3rem;
    }
    `;

export const BotaoConheca = styled.button`
    width: 10rem;
    height: 3rem;
    background-color: #0E48AF;
    color: white;
    font-family: "Roboto Condensed", serif;
    font-size: 20px;
    font-weight: 300;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    `;

export const BackgroundCards = styled.div`
        background-color: white;
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 5%;
        
        font-family: "Roboto Condensed", serif;
        font-size: 30px;
        font-weight: bold;
    `;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
    margin: 1rem;
    padding: 1rem;
    `;

export const Background2 = styled.div`

    background-image: url(${image2});
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 31rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ContainerBackground2 = styled.div`
   width: 85%;
   height: 100%;
   display: flex;
   justify-content: start;
   align-items: center;

    p{
        font-family: "Roboto Condensed", serif;
        font-size: 5rem;
        font-weight: bold;
        color: white;
        text-align: center;
    }
    `;

export const ContianerCarrossel = styled.div`
    width: 30rem;
    height: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;

    `;

export const ContainerTituloCarrossel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 60rem;
    padding: 1rem;

    word-wrap: break-word; /* Faz com que o texto pule para a linha de baixo quando ultrapassar o limite */
  word-break: break-word;


    h1{
        font-family: "Roboto Condensed", serif;
        font-size: 5rem;
        color: black;
        text-align: center;

        margin-bottom: 2rem;
    }

    p{
        font-family: "Roboto Condensed", serif;
        font-size: 1.5rem;
        color: black;
        text-align: center;

        margin-bottom: 2rem;
    }`;

export const ContainerJesusKing = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 70%;
    height: 30rem;
   

    .content1{
        width: 50%;
        height: 100%;
        padding: 1rem;

        margin-right: 1rem;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .content2{
        width: 50%;
        height: 100%;
        padding: 1rem;

        margin-left: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        
        text-align: center;

        h1{
            font-family: "Roboto Condensed", serif;
            font-size: 3rem;
            color: black;
            text-align: justify;

            margin-bottom: 3rem;

            @media (max-width: 1440px){
                font-size: 2rem;
            }

            
        }

        p{
            font-family: "Roboto Condensed", serif;
            font-size: 1.7rem;
            color: black;
            text-align: justify;

            font-weight: 200;

            @media (max-width: 1440px){
                font-size: 1.5rem;
            }
        }
    }

    @media (max-width: 768px){
                flex-direction: column;
                border: 2px solid green;
                
            }

    
    `;

export const ContainerIntegrante = styled.div`
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    
    
    justify-content: center;
    align-items: center;

    place-items: center;
    

    width: 100%;
    height: 90%;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;

        width: 100%;
        height: 100%;
        
        
        
        img{
            @media (max-height: 768px){ 
                width: 5rem;
                height: 5rem;
                
            }
            width: 6rem;
            height: 6rem;
            border-radius: 50%;

            object-fit: cover;

            margin: 0.3rem;
        }

        p{
            font-family: "Roboto Condensed", serif;
            font-size: 1.1rem;
            color: black;
            text-align: center;
        }
    }
    `;
