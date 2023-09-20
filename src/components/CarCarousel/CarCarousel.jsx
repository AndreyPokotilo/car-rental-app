import {React, useRef} from 'react';
import { useSelector } from 'react-redux';
import { selectedCars } from 'redux/cars/cars-selectors';
import {
  CarouselContainer,
  Img,
  Slider,
  Prev,
  Next,
  SlidePanel,
  PrevImg,
  NextImg,
} from './CarCarousel.styled';
import arrowLeft from '../../images/round-arrow-left-svgrepo-com.svg'
import arrowRight from '../../images/round-arrow-right-svgrepo-com.svg'


export function CarCarousel() {

  const allCars = useSelector(selectedCars);

let imageContainerRef = useRef(null);

const prev = () => imageContainerRef.current.scrollLeft -= 250;
const next = () => imageContainerRef.current.scrollLeft += 250;


  return (
    <CarouselContainer>
      <Slider>
        <Prev><PrevImg onClick={prev} src={arrowLeft} alt='arrowLeft'/></Prev>
        <SlidePanel ref={imageContainerRef}>
          {allCars
            .map(car => (
              <div key={car.id}><Img src={car.photoLink || car.img} alt="Image" /><p>{car.rentalPrice}</p></div>
            ))
            }
        </SlidePanel>
        <Next><NextImg onClick={next} src={arrowRight} alt='arrowRight'/></Next>
      </Slider>
    </CarouselContainer>
  );
}
