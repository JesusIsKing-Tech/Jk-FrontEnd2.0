import styled from "styled-components";

export const Background = styled.div`
  background-color: #1C1D21;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row; /* Altera para linha */
    /* justify-content: space-around; Espaço entre os elementos */
    align-items: center; /* Centraliza os itens verticalmente */
    /* padding: 20px; */
    /* height: auto; */
    height: 91vh;

  }
`;

export const Box = styled.div`
  display: flex;
`;


