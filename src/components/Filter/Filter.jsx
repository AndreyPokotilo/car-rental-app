import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  FilterContainer,
  Form,
  BrandWrapper,
  PriceWrapper,
  MileageWrapper,
  MileageInputWrapper,
  LabelBrand,
  SelectBrand,
  Option,
  LabelPrice,
  LabelMileage,
  InputMileageFrom,
  InputMileageTo,
  Button,
  ArrowDown,
  ArrowUp,
  SelectPrice,
} from './Filter.styled';
import { filtred } from 'redux/cars/cars-slice';
import { selectedCars, selectedFavorites } from 'redux/cars/cars-selectors';
import arrowUp from '../../images/chevron-up.svg'
import arrowDown from '../../images/chevron-down.svg'




export function Filter() {
    const [isOpen, setIsOpen] = useState(false);
  const [filterValues, setFilterValues] = useState({
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  });
  
  const allCars = useSelector(selectedCars);
  const favorites = useSelector(selectedFavorites);
  const dispatch = useDispatch()
  const {pathname} = useLocation()

  const brands = allCars.reduce((acc, car) => {
    if (!acc.includes(car.make)) {
      acc.push(car.make);
    }
    return acc;
  }, []);

  const prices = allCars.reduce((acc, car) => {
    if (!acc.includes(car.rentalPrice)) {
      acc.push(car.rentalPrice);
    }
    return acc;
  }, []);
   
const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

const handleBlur = () => {
    setIsOpen(false);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFilterValues({...filterValues, [name]: value,});
  };

  const filterCars = (cars)=> 
cars.filter(car=> car.make.toLowerCase() === filterValues.brand)
    
  

  const handleSubmit = e => {
    e.preventDefault();

if(pathname === '/catalog') {
    dispatch(filtred(filterCars(allCars)))
}

if(pathname === '/favorites') {
    dispatch(filtred(filterCars(favorites)))
}
  };

  return (
    <FilterContainer>
      <Form onSubmit={handleSubmit}>
        <BrandWrapper>
          {isOpen ? <ArrowUp src={arrowUp} alt='arrowUp'/>
          :<ArrowDown src={arrowDown} alt='arrowDown'/>}
          <LabelBrand htmlFor="brand">Car brand</LabelBrand>
          <SelectBrand
            name="brand"
            value={filterValues.brand}
            onChange={handleInputChange}
            onClick={handleSelectClick}
            onBlur={handleBlur}
          >
            <option>Enter the text</option>
            {brands.map((brand, index) => <Option key={index}>{brand.toLowerCase()}</Option>)}
          </SelectBrand>
        </BrandWrapper>

        <PriceWrapper>
          <LabelPrice htmlFor="price">Price / 1 hour</LabelPrice>
          <SelectPrice
            name="price"
            value={filterValues.price}
            onChange={handleInputChange}
            onClick={handleSelectClick}
            onBlur={handleBlur}
          >
            <option>To $</option>
            {prices.map((price, index) => <Option key={index}>{price.match(/\d+/g).join('') + '$'}</Option>)}
          </SelectPrice>
        </PriceWrapper>

        <MileageWrapper>
          <LabelMileage htmlFor="mileage">Сar mileage / km</LabelMileage>
          <MileageInputWrapper>
            <InputMileageFrom
              type="text"
              id="mileage"
              name="mileageFrom"
              placeholder="From"
              value={filterValues.mileageFrom}
              onChange={handleInputChange}
            />
            <InputMileageTo
              type="text"
              id="mileage"
              name="mileageTo"
              placeholder="To"
              value={filterValues.mileageTo}
              onChange={handleInputChange}
            />
          </MileageInputWrapper>
        </MileageWrapper>

        <Button type="submit">Search</Button>
      </Form>
    </FilterContainer>
  );
}
