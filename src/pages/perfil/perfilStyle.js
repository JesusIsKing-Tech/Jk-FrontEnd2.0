import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1C1D21;
  min-height: 91vh;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.div`
  width: 30%;
  background-color: #131313;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 2px solid #1E90FF; */
margin: 0 15px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const MainContent = styled.div`
  width: 70%;
  padding: 20px;
  background-color: #131313;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }

  height: 10%;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
`;

export const InfoLabel = styled.label`
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
  display: block;
  font-weight: bold;
  width: 80%;
`;

export const Endereco = styled.label`
  color: #fff;
  font-size: 24px;
  margin-bottom: 50px;
  display: block;
  font-weight: bold;
  width: 100%;
`;

export const InfoInput = styled.input`
  width: 80%;
  padding: 10px;
  background-color: #2C2F33;
  border: none;
  border-radius: 5px;
  color: #ccc;
  margin-bottom: 40px;
  box-sizing: border-box;
  outline: none;
`;

export const EditButton = styled.button`
  padding: 10px 15px;
  background-color: #1E90FF;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* display: flex; */
  width: auto;
  max-width: 30%;
  /* align-items: center; */
  transition: background-color 0.3s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  margin-top: 20px;
/* width: 100%; */
  &:hover {
    background-color: #1C86EE;
  }
  svg {
    margin-right: 8px;
  }
`;

export const ToggleButton = styled.button`
  background-color: ${(props) => (props.active ? "#1E90FF" : "#ccc")};
  border: none;
  border-radius: 15px;
  width: 50px;
  height: 25px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;

  &:after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${(props) => (props.active ? "26px" : "2px")};
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    transition: left 0.3s;
  }
`;