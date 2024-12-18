import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 500px;
    border-radius: 10px;
    margin: 2rem;
    padding: 1rem;
    transition: 0.3s;

    border:  #0E48AF 2px solid;
    border-bottom: #0E48AF 25px solid;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 1366px ){
        width: 400px;
        height: 400px
    }
`;

export const ContainerImg = styled.div`
    width: 90%;
    height: 150px;

    img {
        width: 25%;
        height: 100%;

    }
`;

export const ContainerTittle = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 5%;


`;

export const Title = styled.h1`
    font-size: 35px;
    font-family: "Roboto Condensed", serif;
    font-weight: bold;
    color: #383838;

    border-bottom: 2px solid #0E48AF;

    @media(max-width: 1366px){
        font-size: 30px;
    }
`;

export const ContainerText = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.5rem;


    p {
        font-size: 25px;
        font-family: "Montserrat", serif;
        font-weight: 400;
        color: #383838;
        text-align: start;
    }

    @media(max-width: 1366px){
        p {
            font-size: 20px;
        }
    }
`;