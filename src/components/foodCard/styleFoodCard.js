import styled from "styled-components"

export const Card = styled.div`
  background: ${(props) => (props.isLowStock ? "linear-gradient(to bottom, #1c1d21, #2a1c1c)" : "#1c1d21")};
  border-radius: 12px;
  padding: 15px;
  text-align: center;
  color: white;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid ${(props) => (props.isLowStock ? "#ff9800" : "transparent")};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  margin-bottom: 15px;
  color: #1e5bfb;
  
  svg {
    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.3));
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  background: #131313;
  padding: 8px 12px;
  border-radius: 6px;
  margin-top: 8px;
  align-items: center;
`

export const Label = styled.span`
  font-size: 13px;
  color: #A7A7A7;
`

export const Value = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.isLow ? "#ff9800" : "white")};
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-top: 15px;
`

export const QuantityButton = styled.button`
  background: ${(props) => (props.danger ? "#d32f2f" : "#1e5bfb")};
  color: white;
  border: none;
  border-radius: 6px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${(props) => (props.danger ? "#b71c1c" : "#1a4fd8")};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`

export const EditButton = styled.button`
  flex: 1;
  background: #333;
  color: white;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #444;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`

export const LowStockBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff9800;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 10px;
  z-index: 1;
`
