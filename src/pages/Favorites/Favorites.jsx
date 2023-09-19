import { useSelector } from 'react-redux';
import { selectedFavorites } from 'redux/cars/cars-selectors';
import { FavoritesContainer } from './Favorites.styled';
import { CarsList } from 'components/CarsList/CarsList';
import { Filter } from 'components/Filter/Filter';

export function Favorites() {
    const favorites = useSelector(selectedFavorites);

    console.log("favorites:", favorites)

  return (
    <FavoritesContainer>
      <Filter />
      <CarsList cars={favorites}/>
    </FavoritesContainer>
  );
}
