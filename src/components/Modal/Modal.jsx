import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  BodyLock,
  Backdrop,
  Content,
  ImgCar,
  TitelCar,
  OptionCar,
  RentalConditions,
  CloseMdal,
  Button,
  Model,
  TitelWrapper,
  TextWrapper,
  ParametrWrapper,
  Age,
  License,
  Deposite,
  Mileage,
  Price,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ car, togleModal }) {

  const carFoto = car.photoLink || car.img;
  const city = car.address.split(",")[1];
  const coutry = car.address.split(",")[2];
//  const age = car.rentalConditions.match(/\d+/g).join('')
const mileage = car.mileage.toString().slice(0,1) + ',' + car.mileage.toString().slice(1)
  
    const arr = car.rentalConditions.split('\n');
    
    const age = arr[0].split(' ').slice(-1).join('');
  
    
  
  

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      togleModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      togleModal();
    }
  };

  return createPortal(
    <>
      <BodyLock />
      <Backdrop onClick={handleBackdropClick}>
        <Content>
          <CloseMdal onClick={togleModal} />
          <ImgCar src={carFoto} alt="foto" />

          <TitelCar>
          <TitelWrapper><p style={{marginRight: '2px'}}>{car.make}</p> <Model>{car.make==='Volvo' || car.make==='Buick'? car.model:''}</Model>, <p style={{marginLeft: '2px'}}>{car.year}</p></TitelWrapper>
          <ParametrWrapper>
          <span> <p style={{paddingLeft: '0px'}}>{city}</p> <p>{coutry}</p> <p><span>Id:</span>{car.id}</p> <p><span>Year:</span>{car.year}</p> <p style={{paddingLeft: '6px'}}><span>Type:</span>{car.type}</p> </span>
          <span> <p style={{paddingLeft: '0px'}}><span>Fuel Consumption:</span>{car.fuelConsumption}</p> <p style={{paddingLeft: '6px'}}><span>Engine Size:</span>{car.engineSize}</p> </span>
          </ParametrWrapper>
          <TextWrapper><p>{car.description}</p></TextWrapper>
          </TitelCar>

          <OptionCar>
            <p>Accessories and functionalities:</p>
            <span> <p style={{paddingLeft: '0px'}}>{car.accessories[0]}</p> <p>{car.accessories[1]}</p> <p style={{paddingLeft: '3px'}}>{car.functionalities[0]}</p> </span>
            <span> <p style={{paddingLeft: '0px'}}>{car.accessories[2]}</p> <p>{car.functionalities[1]}</p> <p style={{paddingLeft: '3px'}}>{car.functionalities[2]}</p> </span>
          </OptionCar>

          <RentalConditions>
          <p>Rental Conditions:</p>
            <span style={{marginBottom: '8px'}}> <Age style={{paddingLeft: '0px'}}>Minimum age :<span>{age}</span></Age> <License>{arr[1]}</License> </span>
            <span> <Deposite style={{paddingLeft: '0px'}}>{arr[2]}</Deposite> <Mileage>Mileage:<span>{mileage}</span></Mileage> <Price>Price:<span>{car.rentalPrice}</span></Price> </span>
          </RentalConditions>

          <Button>Rental car</Button>
        </Content>
      </Backdrop>
    </>,
    modalRoot
  );
}
