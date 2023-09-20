import {
  StartContainer,
  Hero,
  ImgBg,
  TitelBlock,
  Titel,
  Text,
  ButtonLink,
  Footer,
  TextFooter,
  ImgFooterContainer,
  ImgFooter,
} from './StartContent.styled';
import Bg from '../../images/bg.png';
import { imgPartner } from 'data/imgPartners';




export function StartContent() {
  return (
    <StartContainer>
      <Hero>
        <ImgBg src={`${Bg}`} alt="background" />
        <TitelBlock>
          <Titel>Rental cars throughout the country</Titel>
          <Text>
            The Car-Rental company provides car rental and rental services in
            cities and airports. We rent cars from economy to standard classes.
          </Text>
          <ButtonLink to="catalog">CHOOSE A CAR</ButtonLink>
        </TitelBlock>
      </Hero>
      <Footer>
        <TextFooter>Our partners</TextFooter>
        <ImgFooterContainer>
        {imgPartner.map(item => <ImgFooter key={item.id} src={`${item.img}`} alt='img'/>)}
          
        </ImgFooterContainer>
      </Footer>
    </StartContainer>
  );
}
