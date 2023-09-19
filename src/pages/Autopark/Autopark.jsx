import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AutoparkContainer } from './Autopark.styled';
import { Filter } from 'components/Filter/Filter';
import { CarsList } from 'components/CarsList/CarsList';
import { getAllCars } from 'redux/cars/cars-operations';
import { selectedCars } from 'redux/cars/cars-selectors';


export function Autopark() {
  const dispatch = useDispatch();
  const allCars = useSelector(selectedCars);
  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);
  return (
    <AutoparkContainer>
      <Filter />
      <CarsList cars={allCars}/>
    </AutoparkContainer>
  );
}
