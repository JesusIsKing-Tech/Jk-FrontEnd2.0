import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: rgba(0, 0, 0, 0.5);
    padding-right: 5%;
    padding-left: 5%;
    width: 100vw;
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: fixed;

    h1 {
        color: white;
    }
`;

export const LogoHeader = styled.img`
    width: 100px;
    height: 100px;

    object-fit: contain;
`;

export const LogoContainer = styled.div`
    width: 10rem;
    height: 6.25rem;
    /* border: 2px solid yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BotaoContainer = styled.div`
    width: 20rem;
    height: 100%;
    /* border: 2px solid yellow; */
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const BotaoLogin = styled.button`

    width: 9rem;
    height: 2rem;
    background-color: transparent;
    color: white;
    font-family: "Roboto Condensed", serif;
    font-size: 20px;
    font-weight: 300;
    border: none;
    border: #0E48AF 2px solid;
    border-radius: 5px;
    cursor: pointer;

`;

export const BotaoCadastro = styled.button`

    width: 9rem;
    height: 2rem;
    background-color: #0E48AF;
    color: white;
    font-family: "Roboto Condensed", serif;
    font-size: 20px;
    font-weight: 300;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

export const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 35%;
    height: 100%;
    /* border: 2px solid yellow; */

    color: white;

    a{
        text-decoration: none;
        color: white;
        font-family: "Roboto Condensed", serif;
        font-size: 20px;
        font-weight: 300;
    }
`;