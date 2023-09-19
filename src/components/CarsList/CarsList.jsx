
import { CarsContainer, List } from './CarsList.styled';
import { CarCard } from 'components/CarCard/CarCard';

export function CarsList({cars}) {
  
  return (
    <CarsContainer>
      <List>
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </List>
    </CarsContainer>
  );
}
