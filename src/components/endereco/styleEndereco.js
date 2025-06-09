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
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
`;

export const RequestItem = styled.div`
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #333;
  background-color: ${(props) => (props.$isSelected ? '#1565c0' : 'transparent')};
  color: ${(props) => (props.$isSelected ? '#ffffff' : '#ccc')};
  font-weight: ${(props) => (props.$isSelected ? 'bold' : 'normal')};
  &:hover {
    background-color: ${(props) => (props.$isSelected ? '#1e88e5' : '#333')};
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
  margin-bottom: 30px;
  font-size: 2.5em;
`;

export const ContactInfo = styled.div`
  margin-bottom: 20px;
  color: #9e9e9e;
  font-size: 1.5em;
  div {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
    }
  }
`;

export const AddressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  /* margin-bottom: 20px; */
`;

export const AddressCard = styled.div`
  background-color: #333;
  border-radius: 8px;
  padding: 20px;
  width: 48%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  h3 {
    color: #ffc107;
    margin-bottom: 10px;
  }
  p {
    color: #ccc;
    margin-bottom: 5px;
  }
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
  border-radius: 5px;
  background-color: #1565c0;
  color: #fff;
  font-size: 1em;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background-color: #1e88e5;
  }
  svg {
    font-size: 1.1em;
  }
`;
export const ActionButtonNao = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: red;
  color: #fff;
  font-size: 1em;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background-color: #c13b3b;
  }
  svg {
    font-size: 1.1em;
  }
`;