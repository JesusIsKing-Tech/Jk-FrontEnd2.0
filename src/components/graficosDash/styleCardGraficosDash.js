import { color } from "chart.js/helpers";
import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  padding: 20px;
  background-color: #1C1D21;
  color: white;
  min-height: 91vh;
  /* border: solid; */

  @media(min-width: 768px) {
    flex-direction: row;
      /* display: flex; */

  }
`;

export const BoxFiltro = styled.div`
  display: flex;
  /* padding: 0 20px; */
  background-color: #1C1D21;
  /* border: solid; */
  flex-direction: row-reverse;
  /* flex-direction: end; */
  /* align-items: ; */
`;

export const StatsGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 20px;
  margin-right: 0;
  cursor: pointer;
  transition: 0.3s;

  @media(min-width: 768px) {
    margin-right: 40px;
  }

  div:hover{
    scale: 1.03;
  }
  
`;


export const ChartsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: ; */
  /* justify-content: space-around; */
  gap: 20px;
  flex: 1;
  height: 50%;
  overflow-y:auto;
  /* border: solid; */


  @media(min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ChartCard = styled.div`
  background: #131313;
  padding: 20px;
  border-radius: 8px;
  flex: 1;
  min-width: 300px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  /* padding:20px; */
    /* border: solid; */


`;

export const BoxTroca = styled.div`
flex: 1;
height: 100%;
margin-bottom: 20px;
justify-content: space-around;
`

export const TableCard = styled.div`
  background: #131313;
  padding: 20px;
  /* border-radius: 8px; */
  /* margin-top: 20px; */
  width: 100%;
  max-height: 36%;
  min-height: 36%;
  overflow-y: auto;
  `;
export const HeaderFamilia = styled.div`
  background: #131313;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 3px;
  margin-top: 20px;
  width: 100%;
`;

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 10px;
    border-bottom: 1px solid #444;
    text-align: left;
  }

  height: 100%;
  overflow-y: auto;

  th {
    /* background: #33334d;  */
  }

  tr:hover {
    /* background: ; */
  }
`;

