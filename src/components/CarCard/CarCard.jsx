import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CarItem,
  Item,
  ImgCar,
  Info,
  Titel,
  Model,
  Description,
  Button,
  FavoritesButton,
} from './CarCard.styled';
import { Modal } from 'components/Modal/Modal';
import active from '../../images/active.svg';
import normal from '../../images/normal.svg';
import { addFavorites, deleteFavorites } from 'redux/cars/cars-slice';
import { selectedFavorites } from 'redux/cars/cars-selectors';

export function CarCard({ car }) {
  const [openModal, setOpenModal] = useState(false);
  const favorites = useSelector(selectedFavorites);
  const dispatch = useDispatch();

  const carFoto = car.photoLink || car.img;
  const city = car.address.split(',')[1];
  const coutry = car.address.split(',')[2];
  const invalidWord = car.rentalCompany.split(' ')[0];
  const premium =
    invalidWord === 'Economy' || invalidWord === 'Family' ? '' : 'Premium';

  const checkCar = favorites?.some(favorite => favorite.id === car.id);

  const togleModal = () => {
    setOpenModal(!openModal);
  };

  const togleFavoriteList = () => {
    if (checkCar) {
      dispatch(deleteFavorites(car));
    } else {
      dispatch(addFavorites(car));
    }
  };

  return (
    <CarItem>
      <Item>
        <FavoritesButton
          src={checkCar ? active : normal}
          alt="heart"
          onClick={togleFavoriteList}
        />
        <ImgCar src={carFoto} alt="foto" />
        <Info>
          <Titel>
            <p>
              {car.make}
              <Model>
                {car.make === 'Volvo' || car.make === 'Buick' ? car.model : ''}
              </Model>
              ,{car.year}
            </p>{' '}
            <p>{car.rentalPrice}</p>
          </Titel>
          <Description>
            <span>
              <p style={{ paddingLeft: '0px' }}>{city}</p> <p>{coutry}</p>{' '}
              <p>{car.rentalCompany}</p> <p>{premium}</p>
            </span>

            <span>
              <p style={{ paddingLeft: '0px' }}>{car.type}</p>{' '}
              <p>{car.model}</p> <p>{car.id}</p>{' '}
            </span>
          </Description>
        </Info>
        <Button onClick={togleModal}>Learn more</Button>
        {openModal && <Modal car={car} togleModal={togleModal} />}
      </Item>
    </CarItem>
  );
}
