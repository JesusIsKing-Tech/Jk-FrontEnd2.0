import styled from 'styled-components';
import image from '../../assets/background-home.png';
import image2 from '../../assets/background-home2.png';


export const HomeContainer2 = styled.div`
    background-color: yellow;
    width: 100vw;
    height: 100vh;
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
export const ContainerBackground2= styled.div`
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
    