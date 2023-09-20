import {  useSelector } from 'react-redux';
import { AutoparkContainer, Button } from './Autopark.styled';
import { Filter } from 'components/Filter/Filter';
import { CarsList } from 'components/CarsList/CarsList';
import { selectedCars } from 'redux/cars/cars-selectors';
// import { useState } from 'react';


export function Autopark() {
  const allCars = useSelector(selectedCars);
  
  // const [currentIndex, setCurrentIndex] = useState(0);

  const renderNextItems = () => {
    // const itemsToRender = allCars.slice(currentIndex, currentIndex + 8);
    // setCurrentIndex(currentIndex + 8)
  };

  return (
    <AutoparkContainer>
      <Filter />
      <CarsList cars={allCars}/>
      <Button onClick={renderNextItems}>Load more</Button>
    </AutoparkContainer>
  );
}
