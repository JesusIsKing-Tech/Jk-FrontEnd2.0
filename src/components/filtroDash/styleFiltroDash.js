import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  padding: 8px 12px;
  border-radius: 8px;
`;

export const Input = styled.input`
  border: none;
  background: transparent;
  margin-left: 8px;
  outline: none;
  font-size: 16px;
  width: 100%;
`;

export const Icon = styled(FaSearch)`
  color: #2563eb;
  font-size: 18px;
`;
