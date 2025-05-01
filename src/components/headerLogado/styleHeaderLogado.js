import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom"; // Importando NavLink do React Router

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  padding: 10px 20px;
  color: #fff;
  height: 9vh;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

export const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: #f0f0f0;
  /* font-weight: 350; */
  font-size:20px;
  font-weight: 300;
  /* text-transform: uppercase; */
  font-family: "Roboto Condensed", serif;
  &.active {
    color: #0e48af; /* Destaque para o link ativo */
  }

  &:hover {
    color: #0e48af;
  }
`;

export const Perfil = styled(RouterNavLink)`
  text-decoration: none;
  color: #0e48af;
  /* font-weight: 350; */
  font-size:20px;
  font-weight: 300;
  /* text-transform: uppercase; */
  font-family: "Roboto Condensed", serif;
 
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #0e48af;
  font-size: 16px;
  font-family: "Roboto Condensed", serif;

  cursor: pointer;

  &:hover {
    /* color: #1c86ee; */
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #f0f0f0;
  font-weight: 350;
  /* text-transform: uppercase; */
  font-family: "Roboto Condensed", serif;
  cursor: pointer;
`;
