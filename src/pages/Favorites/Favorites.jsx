import { useSelector } from 'react-redux';
import { selectedFavorites } from 'redux/cars/cars-selectors';
import {
  FavoritesContainer,
  EmptyImg,
  EmptyContainer,
  ListContainer,
  EmptyText,
} from './Favorites.styled';
import { CarsList } from 'components/CarsList/CarsList';
import { Filter } from 'components/Filter/Filter';
import imgEmpty from '../../images/pngegg.png';

export function Favorites() {
  const favorites = useSelector(selectedFavorites);


  return (
    <FavoritesContainer>
      {favorites.length === 0 ? (
        <EmptyContainer>
          <EmptyText>You haven't added your cars yet!</EmptyText>
          <EmptyImg src={imgEmpty} alt="img" />
        </EmptyContainer>
      ) : (
        <ListContainer>
          <Filter />
          <CarsList cars={favorites} />
        </ListContainer>
      )}
    </FavoritesContainer>
  );
}
