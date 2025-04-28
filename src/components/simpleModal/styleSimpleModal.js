import styled from "styled-components"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background-color: #1c1d21;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #333;
`

export const ModalTitle = styled.h2`
  color: white;
  font-size: 18px;
  margin: 0;
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #A7A7A7;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: white;
  }
`

export const ModalBody = styled.div`
  padding: 20px;
`

export const FormGroup = styled.div`
  margin-bottom: 15px;
`

export const Label = styled.label`
  display: block;
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  background-color: #131313;
  border: 1px solid #333;
  border-radius: 6px;
  color: white;
  font-size: 14px;
  
  &:focus {
    border-color: #1e5bfb;
    outline: none;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`

export const Button = styled.button`
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
`

export const SaveButton = styled(Button)`
  background-color: #1e5bfb;
  color: white;
  border: none;
  
  &:hover {
    background-color: #1a4fd8;
  }
`

export const DeleteButton = styled(Button)`
  background-color: #d32f2f;
  color: white;
  border: none;
  
  &:hover {
    background-color: #b71c1c;
  }
`

export const CancelButton = styled(Button)`
  background-color: transparent;
  color: #A7A7A7;
  border: 1px solid #333;
  
  &:hover {
    background-color: #333;
    color: white;
  }
`

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  
  input {
    text-align: center;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
`

export const QuantityButton = styled.button`
  background-color: #1e5bfb;
  color: white;
  border: none;
  width: 40px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:first-child {
    border-radius: 6px 0 0 6px;
    background-color: #d32f2f;
  }
  
  &:last-child {
    border-radius: 0 6px 6px 0;
  }
  
  &:hover {
    opacity: 0.9;
  }
`
