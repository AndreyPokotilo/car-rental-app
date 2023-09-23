
import { CarsContainer, List } from './CarsList.styled';
import { CarCard } from 'components/CarCard/CarCard';
import { selectedFilterCars } from 'redux/cars/cars-selectors';
import { useSelector } from 'react-redux';

export function CarsList({cars}) {
  const filterdCars = useSelector(selectedFilterCars);
  return (
    <CarsContainer>
      <List>
        {filterdCars 
        ? filterdCars.map(car => (<CarCard key={car.id} car={car} />))
      : cars.map(car => (<CarCard key={car.id} car={car} />))
      }
      </List>
    </CarsContainer>
  );
}
