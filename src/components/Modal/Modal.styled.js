import styled, { createGlobalStyle } from 'styled-components';
import { ReactComponent as Close } from '../../images/x.svg';

export const BodyLock = createGlobalStyle`
body{
    overflow: hidden;
  }
`;

export const CloseMdal = styled(Close)`
  position: absolute;
  width: 24px;
  height: 24px;
  fill: #121417;
  top: 16px;
  left: 500px;
  cursor: pointer;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 100;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 541px;
  max-height: 752px;
  padding: 40px;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const ImgCar = styled.img`
  width: 461px;
  height: 246px;
  object-fit: cover;
  border-radius: 24px;
  margin-bottom: 10px;
`;

export const TitelCar = styled.div`
  width: 461px;
  height: 126px;
  margin-bottom: 24px;
`;

export const TitelWrapper = styled.div`
  display: flex;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #000;
  /* margin-bottom: 10px; */
  > p {
    margin: 0px;
  }
`;

export const ParametrWrapper = styled.div`
  color: rgba(18, 20, 23, 0.5);
  margin-bottom: 12px;
  > span {
    display: flex;
    > p {
      margin: 0px;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      gap: 5px;
      > span {
        margin-right: 3px;
      }
    }
    > p:not(:last-child) {
      padding-left: 6px;
      padding-right: 6px;
      border-right: 1px solid rgba(18, 20, 23, 0.1);
    }
  }
`;

export const TextWrapper = styled.div`
  > p {
    margin: 0px;
    color: #121417;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    word-spacing: 0.5px;
  }
`;

export const Model = styled.p`
  color: #3470ff;
  margin-left: 5px;
`;

export const OptionCar = styled.div`
  width: 461px;
  height: 68px;

  /* background-color: yellow; */
  margin-bottom: 24px;
  > p {
    color: #121417;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin: 0px;
    margin-bottom: 4px;
  }
  > span {
    display: flex;
    flex-wrap: wrap;

    > p {
      display: flex;
      color: rgba(18, 20, 23, 0.5);
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      margin: 0px;
    }
    > p:not(:last-child) {
      padding-left: 3px;
      padding-right: 3px;
      border-right: 1px solid rgba(18, 20, 23, 0.1);
    }
  }
`;

export const RentalConditions = styled.div`
  width: 461px;
  height: 100px;
  margin-bottom: 24px;
  > p {
    margin: 0px;
    margin-bottom: 8px;
    color: #121417;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  > span {
    display: flex;
    color: #363535;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const Age = styled.p`
  display: flex;
  width: 133px;
  height: 32px;
  justify-content: center;
  align-items: center;
  margin: 0px;
  border-radius: 35px;
  background: #f9f9f9;
  > span {
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    color: #3470ff;
    margin-left: 3px;
  }
`;

export const License = styled.p`
  display: flex;
  height: 32px;
  width: 138px;
  justify-content: center;
  align-items: center;
  margin: 0px;
  margin-left: 8px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const Deposite = styled.p`
  display: flex;
  height: 32px;
  width: 175px;
  justify-content: center;
  align-items: center;
  margin: 0px;
  border-radius: 35px;
  background: #f9f9f9;
`;

export const Mileage = styled.p`
  display: flex;
  height: 32px;
  width: 111px;
  justify-content: center;
  align-items: center;
  margin: 0px;
  margin-left: 8px;
  border-radius: 35px;
  background: #f9f9f9;
  > span {
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    color: #3470ff;
    margin-left: 3px;
  }
`;

export const Price = styled.p`
  display: flex;
  height: 32px;
  width: 86px;
  justify-content: center;
  align-items: center;
  margin: 0px;
  margin-left: 8px;
  border-radius: 35px;
  background: #f9f9f9;
  > span {
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    color: #3470ff;
    margin-left: 3px;
  }
`;

export const Button = styled.button`
  width: 168px;
  height: 44px;
  color: #fff;
  background-color: #3470ff;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #0b44cd;
  }
`;
