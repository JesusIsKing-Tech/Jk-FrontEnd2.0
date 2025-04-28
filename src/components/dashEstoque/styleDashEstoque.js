import styled from "styled-components";

export const Container = styled.div`
  background-color: #101010;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  /* padding: 20px; */
  border-radius: 12px;
  text-align: center;
  border: 2px solid #1e5bfb;
  /* max-width: 300px; */
  height: 85%;
  padding: 70px;
  /* margin: 20px; */
  width: 25vw;

`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  /* margin-bottom: 40px; */
  /* margin-top: -40px; */
`;

export const BoxTitulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;

`;

export const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
`;

export const LegendColor = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 3px;
`;

export const PercentageText = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

export const Divider = styled.div`
  height: 1px;
  background: white;
  /* margin: 10px 0; */
  margin: 40px;
  /* padding: ; */
`;

export const StockInfo = styled.div`
  margin-top: 10px;
`;

export const StockTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;

`;

export const StockDetails = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  background: #1a1a1a;
  padding: 5px 10px;
  border-radius: 8px;
  margin-top: 5px;
`;

export const StockLabel = styled.span`
  font-size: 16px;
  color: white;
`;

export const StockValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;
