import {  useSelector } from 'react-redux';
import { AutoparkContainer, Button } from './Autopark.styled';
import { Filter } from 'components/Filter/Filter';
import { CarsList } from 'components/CarsList/CarsList';
import { selectedCars } from 'redux/cars/cars-selectors';
import { useState } from 'react';


export function Autopark() {
  const allCars = useSelector(selectedCars);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cars, setCars] = useState([])
  console.log("cars:", cars)


  const renderNextItems = () => {
    const itemsToRender = allCars.slice(currentIndex, currentIndex + 8);
    setCars((prevState)=>[...prevState, ...itemsToRender])
    setCurrentIndex(currentIndex + 8)
  };

  if(cars.length === 0) {
    renderNextItems()
  }

  return (
    <AutoparkContainer>
      <Filter />
      <CarsList cars={cars}/>
      <Button onClick={renderNextItems}>Load more</Button>
    </AutoparkContainer>
  );
}
