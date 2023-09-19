import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Container,
  Header,
  LogoLink,
  LogoText,
  LogoImg,
  Nav,
  LogoBox,
  Link,
  Contact,
} from './AppBar.styled';
import laibl from '../../images/car1.png';

export default function AppBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        // Скроллим вверх - делаем header видимым
        document.querySelector('header').style.top = '0';
      } else {
        // Скроллим вниз - прячем header
        document.querySelector('header').style.top = '-100px'; // Можете указать другое значение для прячущегося header
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
   return () => {
      // Удаляем обработчик события при размонтировании компонента
      window.removeEventListener('scroll', handleScroll);}
  }, [prevScrollPos]);

  return (
    <Container>
      <Header>
        <LogoLink to="/" end>
          <LogoBox>
            <LogoImg src={laibl} alt="laibl" />
          </LogoBox>
          <LogoText>Car-Rental</LogoText>
        </LogoLink>
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="catalog">Autopark</Link>
          <Link to="favorites">Favorites</Link>
        </Nav>
        <Contact>Tel: +38(068)77-78-800 Tel: +38(099)88-78-900</Contact>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
