import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom"; // Importando NavLink do React Router

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #101010;
  padding: 10px 20px;
  color: #fff;
  height: 60px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

export const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;

  &.active {
    color: #1e90ff; /* Destaque para o link ativo */
  }

  &:hover {
    color: #1e90ff;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #1e90ff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #1c86ee;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
`;
