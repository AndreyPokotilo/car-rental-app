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
    field1: '',
    field2: '',
    field3: '',
    field4: '',
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
    // onFilterSubmit(filterValues);
  };

  return (
    <FilterContainer>
      <Form onSubmit={handleSubmit}>
        <BrandWrapper>
          <LabelBrand htmlFor="field1">Car brand</LabelBrand>
          <InputBrand
            type="text"
            id="field1"
            name="field1"
            placeholder="Enter the text"
            value={filterValues.field1}
            onChange={handleInputChange}
          />
        </BrandWrapper>

        <PriceWrapper>
          <LabelPrice htmlFor="field2">Price / 1 hour</LabelPrice>
          <InputPrice
            type="text"
            id="field2"
            name="field2"
            placeholder="To $"
            value={filterValues.field2}
            onChange={handleInputChange}
          />
        </PriceWrapper>

        <MileageWrapper>
          <LabelMileage htmlFor="field3">Сar mileage / km</LabelMileage>
          <MileageInputWrapper>
            <InputMileageFrom
              type="text"
              id="field3"
              name="field3"
              placeholder="From"
              value={filterValues.field3}
              onChange={handleInputChange}
            />
            <InputMileageTo
              type="text"
              id="field3"
              name="field4"
              placeholder="To"
              value={filterValues.field4}
              onChange={handleInputChange}
            />
          </MileageInputWrapper>
        </MileageWrapper>

        <Button type="submit">Search</Button>
      </Form>
    </FilterContainer>
  );
}
