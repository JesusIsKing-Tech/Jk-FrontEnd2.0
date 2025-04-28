import styled from "styled-components"
import { Search } from "lucide-react"

export const Container = styled.div`
  background-color: #101010;
  padding: 20px;
  border-radius: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 70vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #1e5bfb #1c1d21;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #1c1d21;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #1e5bfb;
    border-radius: 10px;
  }
`

export const BoxGrid = styled.div`
  background-color: #101010;
  border-radius: 12px;
  border: 1.5px solid #1e5bfb;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 85%;
  max-height: 85%;
  position: relative;
`

export const ContainerSearch = styled.div`
  background-color: #101010;
  border-radius: 12px 12px 0 0;
  border-bottom: 1.5px solid #1e5bfb;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #1c1d21;
  border-radius: 8px;
  padding: 8px 12px;
  width: 60%;
  transition: all 0.3s ease;
  
  &:focus-within {
    box-shadow: 0 0 0 2px rgba(30, 91, 251, 0.5);
  }
`

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
`

export const SearchIcon = styled(Search)`
  color: #A7A7A7;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  padding: 0 10px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #1e5bfb;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #1a4fd8;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`

export const NoResults = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  color: #A7A7A7;
  
  span {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 14px;
  }
`

export const TotalCount = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 10px;
  background-color: #1c1d21;
  color: white;
  font-size: 14px;
  
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  
  .warning {
    color: #ff9800;
  }
  
  strong {
    font-size: 16px;
  }
`
