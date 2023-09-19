import styled from 'styled-components';


export const CarItem = styled.li`
  width: calc((100% - 14.5px * 8) / 4);
  margin: 14.5px;
  list-style: none;
`;

export const Item = styled.div`
  position: relative;
  width: 274px;
  height: 426px;
  border-radius: 12px;
`;

export const ImgCar = styled.img`
  width: 274px;
  height: 274px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 14px;
`;

export const Info = styled.div`
  width: 274px;
  margin-bottom: 28px;
`;

export const Titel = styled.span`
  display: flex;
  width: 274px;
  justify-content: space-between;
  margin-bottom: 8px;
  > p {
    font-size: 16px;
    font-weight: 500;
    margin: 0px;
  }
`;
export const Description = styled.span`
  display: flex;
  width: 274px;
  flex-wrap: wrap;
  > span {
    display: flex;
    font-size: 11.65px;
    font-style: normal;
    color: rgba(18, 20, 23, 0.5);
    word-spacing: 1.5;
    > p {
      margin: 0px;
      padding-left: 4px;
    }
    > p:not(:last-child) {
      padding-right: 4px;
      border-right: 1px solid rgba(18, 20, 23, 0.1);
    }
  }
`;
export const Model = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #3470ff;
`;

export const Button = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background-color: #3470ff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const FavoritesButton = styled.img`
  position: absolute;
  top: 14px;
  left: 242px;
  font-size: 16px;
  font-weight: 500;
  color: #3470ff;
`;
