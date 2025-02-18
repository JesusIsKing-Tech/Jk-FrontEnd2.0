import styled from "styled-components";

export const Card = styled.div`
  background: #1c1d21;
  border-radius: 12px;
  padding: 15px;
  /* height: 100%; */
  text-align: center;
  color: white;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  background: #131313;
  padding: 5px 10px;
  border-radius: 6px;
  margin-top: 5px;
`;

export const Label = styled.span`
  font-size: 12px;
  color: white;
`;

export const Value = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
