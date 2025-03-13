import styled from 'styled-components';

export const BoxTroca = styled.div`
  flex: 1;
  height: 100%;
  margin-bottom: 20px;
  justify-content: space-around;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  margin: 10px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f7f9fc;
  border: 1px solid #ddd;
`;

export const Sidebar = styled.div`
  width: 300px;
  background-color: #1f1f1f;
  border-right: 1px solid #444;
  overflow-y: auto;
`;

export const RequestItem = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #333;
  background-color: ${(props) => (props.isSelected ? '#1565c0' : 'transparent')};
  color: ${(props) => (props.isSelected ? '#ffffff' : '#ccc')};
  font-weight: ${(props) => (props.isSelected ? 'bold' : 'normal')};
  transition: background 0.3s;
  
  &:hover {
    background-color: ${(props) => (props.isSelected ? '#1e88e5' : '#333')};
  }
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  background-color: #212121;
  color: #e0e0e0;
  position: relative;
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #777;
  font-style: italic;
  font-size: 1.2em;
`;

export const RequestTitle = styled.h2`
  color: #ffffff;
  margin-bottom: 15px;
  font-size: 2em;
`;

export const EventImageContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 15px;
  max-height: 300px;
`;

export const EventImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 8px;
`;

export const EventDescription = styled.p`
  color: #bdbdbd;
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  padding: 10px 0;
  background-color: #212121;
  border-top: 1px solid #333;
`;

export const ActionButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: background 0.3s;
  background-color: ${(props) => (props.danger ? '#d32f2f' : '#1565c0')};
  color: #fff;
  
  &:hover {
    background-color: ${(props) => (props.danger ? '#b71c1c' : '#1e88e5')};
  }
`;

export const EditInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #bbb;
  font-size: 1em;
  color: #333;
  background-color: #f9f9f9;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #1565c0;
    outline: none;
  }
`;

export const Label = styled.label`
  color: #ffffff;
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;


export const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

export const EditInputDate = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1em;
  color: #333;
  background-color: #f9f9f9;
  /* text-align: center; */
  transition: border-color 0.3s;

  &:focus {
    border-color: #1565c0;
    outline: none;
  }
`;

