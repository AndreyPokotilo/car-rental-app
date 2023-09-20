import {  useSelector } from 'react-redux';
import { AutoparkContainer } from './Autopark.styled';
import { Filter } from 'components/Filter/Filter';
import { CarsList } from 'components/CarsList/CarsList';
import { selectedCars } from 'redux/cars/cars-selectors';


export function Autopark() {
  const allCars = useSelector(selectedCars);
  
  return (
    <AutoparkContainer>
      <Filter />
      <CarsList cars={allCars}/>
    </AutoparkContainer>
  );
}
