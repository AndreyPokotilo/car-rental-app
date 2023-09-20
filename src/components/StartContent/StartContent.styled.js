import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StartContainer = styled.div`
width: 100%;
`;

export const Hero = styled.div`
position: relative;
width: 100%;
height: 800px;
background: linear-gradient(to bottom, #4d4d4d, #bdbdbd, #d9d9d9);
`;

export const TitelBlock = styled.div`
position: absolute;
top: 115px;
left: 250px;
width: 800px;
height: 200px;
`;

export const Titel = styled.h1`
color: #fff;
font-size: 50px;
font-style: normal;
font-weight: 500;
line-height: 20px;
`;

export const Text = styled.p`
color: #fff;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 20px;
`;

export const ImgBg = styled.img`
width: 100%;
height: 800px;
`;

export const ButtonLink = styled(NavLink)`
color: #fff;
font-size: 28px;
font-style: normal;
font-weight: 500;
line-height: 20px;
padding: 8px 14px;
border-radius: 4px;
background-color: rgba(255,192,70,.15);
border: 1px solid #fff;
width: 320px;
height: 60px;
text-decoration: none;
margin-left: 500px;
&:hover {
    background-color: rgba(255,192,70,.7);
}
`;

export const Footer = styled.div`
background-color: #000;
padding-bottom: 20px;
`;

export const TextFooter = styled.p`
display: flex;
justify-content: center;
margin: 0px;
margin-bottom: 10px;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 20px;
color: #fff;
`;

export const ImgFooterContainer = styled.div`
display: flex;
padding: 0px 5px;
`;

export const ImgFooter = styled.img`
width: 87px;
&:not(:last-child) {
      margin-right: 4.07px;
    };
`;
