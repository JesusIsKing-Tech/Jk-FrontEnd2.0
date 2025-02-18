import styled from "styled-components";
import { Search } from "lucide-react";

export const Container = styled.div`
  background-color: #101010;
  padding: 20px;
  border-radius: 12px;
  /* border: 2px solid #1e5bfb; */
  width: 100%;
  /* max-width: 800px; */
  /* margin: auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 40vh; */
  max-height: 90vh;
  overflow-y: scroll; 
`;

export const BoxGrid = styled.div`
  background-color: #101010;
  /* padding: 20px; */
  /* margin: 20px; */
  border-radius: 12px;
  border: 1.5px solid #1e5bfb;
  width: 50%;
  /* max-width: 55%; */
  /* margin: auto; */
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 85%;
  max-height: 85%;
`;

export const ContainerSearch = styled.div`
  background-color: #101010;
  border-radius: 12px;
  border-bottom: 1.5px solid #1e5bfb;
  width:100%;
  /* margin: auto; */
  display: flex;
  flex-direction: column;
  align-items: end;

`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #1c1d21;
  border-radius: 8px;
  padding: 5px;
  width: 40%;
  max-width: 600px;
  position: sticky;
  top: 0;
  z-index: 10;
  margin: 20px;
  /* border: solid 3px; */
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: white;
  flex: 1;
  font-size: 16px;
  &::placeholder {
    color: #A7A7A7;
  }
`;

export const SearchIcon = styled(Search)`
  color: #A7A7A7;
`;

export const TableWrapper = styled.div`
  background-color: #DCE0E6;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 65vw;
  min-width: 50vw;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: scroll;
  max-height: 68vh;
  padding: 15px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0 30px;
  justify-content: center;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
