import styled from 'styled-components';
import { FaFilter } from 'react-icons/fa';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: #292A2D;
  color: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  padding: 10px 20px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  cursor: pointer;
`;

export const Icon = styled(FaFilter)`
  margin-right: 8px;
  color: #3B82F6;
`;