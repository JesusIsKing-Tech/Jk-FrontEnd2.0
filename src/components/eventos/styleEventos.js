import styled from "styled-components"

export const BoxTroca = styled.div`
  flex: 1;
  height: 100%;
  margin-bottom: 20px;
  justify-content: space-around;
`

export const Container = styled.div`
  display: flex;
  height: 100%;
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f7f9fc;
  border: 1px solid #ddd;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

export const Sidebar = styled.div`
  width: 300px;
  background-color: #1f1f1f;
  border-right: 1px solid #444;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`

export const RequestItem = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #333;
  background-color: ${(props) => (props.isSelected ? "#1565c0" : "transparent")};
  color: ${(props) => (props.isSelected ? "#ffffff" : "#ccc")};
  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
  transition: background 0.3s;
  
  &:hover {
    background-color: ${(props) => (props.isSelected ? "#1e88e5" : "#333")};
  }
`

export const AddEventButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 15px;
  padding: 12px;
  background-color: #2e7d32;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #388e3c;
  }
`

export const NoEventsMessage = styled.div`
  color: #777;
  text-align: center;
  padding: 20px;
  font-style: italic;
`

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #212121;
  color: #e0e0e0;
  position: relative;
  overflow-y: auto;
`

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #777;
  font-style: italic;
  font-size: 1.2em;
`

export const RequestTitle = styled.h2`
  color: #ffffff;
  margin-bottom: 15px;
  font-size: 2em;
`

export const EventImageContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  margin: 20px 0;
  max-height: 300px;
`

export const EventImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 8px;
  object-fit: cover;
`

export const EventDescription = styled.p`
  color: #bdbdbd;
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 20px;
  white-space: pre-line;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: auto;
  padding: 20px 0;
  background-color: #212121;
  border-top: 1px solid #333;
`

export const ActionButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s;
  background-color: ${(props) => (props.danger ? "#d32f2f" : "#1565c0")};
  color: #fff;
  
  &:hover {
    background-color: ${(props) => (props.danger ? "#b71c1c" : "#1e88e5")};
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`

export const EditInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #444;
  font-size: 1em;
  color: #e0e0e0;
  background-color: #333;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #1565c0;
    outline: none;
    box-shadow: 0 0 0 2px rgba(21, 101, 192, 0.2);
  }
  
  &::placeholder {
    color: #777;
  }
`

export const Label = styled.label`
  color: #ffffff;
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
`

export const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`

export const EditInputDate = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #444;
  font-size: 1em;
  color: #e0e0e0;
  background-color: #333;
  transition: border-color 0.3s;

  &:focus {
    border-color: #1565c0;
    outline: none;
    box-shadow: 0 0 0 2px rgba(21, 101, 192, 0.2);
  }
  
  &::placeholder {
    color: #777;
  }
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  h2 {
    color: #fff;
    margin-bottom: 20px;
    font-size: 1.8em;
    border-bottom: 1px solid #444;
    padding-bottom: 10px;
  }
`

export const EventTimeInput = styled(EditInput)`
  padding-left: 12px;
`

export const EventValueInput = styled(EditInput)`
  padding-left: 12px;
`

export const ImagePreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  
  img {
    max-height: 150px;
    width: auto;
    object-fit: contain;
  }
`

export const ImagePlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #333;
  border: 2px dashed #555;
  border-radius: 8px;
  padding: 30px;
  color: #777;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    border-color: #1565c0;
    color: #1565c0;
  }
  
  p {
    margin-top: 10px;
  }
`

export const ImageUploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 15px;
  background-color: #1565c0;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #1e88e5;
  }
  
  input {
    display: none;
  }
`

export const EventStatus = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  
  div {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #333;
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 0.9em;
    
    svg {
      color: #1565c0;
    }
  }
`
