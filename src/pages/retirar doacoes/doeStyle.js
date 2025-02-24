import styled from "styled-components";

export const Background = styled.div`
  background-color: #1C1D21;
  height: 91vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

export const TituloContainer = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

export const Titulo = styled.h2`
  color: #F0F0F0;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Form = styled.form`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  color: #F0F0F0;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 20px;
  border: 1px solid #444;
  border-radius: 5px;
  background-color: #2C2F33;
  color: #F0F0F0;
`;

export const Button = styled.button`
  grid-column: span 2;
  width: 50%;
  padding: 12px;
  margin: 20px auto 0;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
    width: 100%;
  }
`;

export const Tabela = styled.table`
  width: 100%;
  margin-bottom: 20px;
  color: #F0F0F0;
  /* border: solid black; */
  border-collapse: collapse;
  /* border-radius: 40%; */
`;

export const Cabecalho = styled.th`
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #444;
`;

export const Linha = styled.tr`
  &:nth-child(even) {
    background-color: #333;
  }
`;

export const Celula = styled.td`
  padding: 8px;
`;

export const Botao = styled.button`
  padding: 10px 20px;
  background-color: #0066cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  display: block;
  margin: 20px auto 0;

  &:hover {
    background-color: #005bb5;
  }
`;
export const BotaoVoltar = styled.button`
  background: none;
  border: none;
  color: #007BFF;
  font-size: 20px;
  cursor: pointer;
  /* position: absolute; */
  top: 20px;
  left: 20px;

  &:hover {
    color: #0056b3;
  }
`;