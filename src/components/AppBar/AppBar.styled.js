import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.main`
  width: 1280px;
  margin: 0 auto;
  padding: 0px 15px 0px 15px;
  overflow: hidden;
`;

export const Header = styled.header`
  position: fixed;
  display: flex;
  transition: top 0.2s;
  align-items: center;
  width: 1260px;
  padding: 8px 10px;
  border-bottom: 1px solid #000;
  background-color: #ffffff;
  z-index: 10;
  > nav {
    display: flex;
  }
`;

export const LogoText = styled.div`
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 500;
  font-family: 'Times New Roman';
  color: #000000;
`;

export const LogoImg = styled.img`
  width: 130px;
  height: 60px;
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoLink = styled(NavLink)`
  justify-content: center;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 80px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  font-size: 25px;
  padding: 8px 16px;
  width: 100px;
  border-radius: 5px;
  align-items: center;
  text-decoration: none;
  color: #aca8a3;
  font-weight: 500;
  background-color: #fff;
  &:hover {
    color: white;
    background-color: #b2b2b2;
    transition: 250ms;
  }
  &.active {
    color: white;
    background-color: #4d4d4d;
    transition: 250ms;
  }
`;

export const Contact = styled.p`
  margin: 0px;
  text-align: center;
  font-size: 30px;
  font-weight: 480;
  font-family: 'Times New Roman';
  width: 500px;
`;
