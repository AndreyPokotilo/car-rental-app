import React, { useState } from 'react';
import {
  FilterContainer,
  Form,
  BrandWrapper,
  PriceWrapper,
  MileageWrapper,
  MileageInputWrapper,
  LabelBrand,
  InputBrand,
  LabelPrice,
  InputPrice,
  LabelMileage,
  InputMileageFrom,
  InputMileageTo,
  Button,
} from './Filter.styled';

export function Filter() {
  const [filterValues, setFilterValues] = useState({
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFilterValues({
      ...filterValues,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <FilterContainer>
      <Form onSubmit={handleSubmit}>
        <BrandWrapper>
          <LabelBrand htmlFor="brand">Car brand</LabelBrand>
          <InputBrand
            type="text"
            id="brand"
            name="brand"
            placeholder="Enter the text"
            value={filterValues.brand}
            onChange={handleInputChange}
          />
        </BrandWrapper>

        <PriceWrapper>
          <LabelPrice htmlFor="price">Price / 1 hour</LabelPrice>
          <InputPrice
            type="text"
            id="price"
            name="price"
            placeholder="To $"
            value={filterValues.price}
            onChange={handleInputChange}
          />
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
