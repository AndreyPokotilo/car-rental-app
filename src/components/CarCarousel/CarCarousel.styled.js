import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: absolute;
  top: 580px;
  left: 185px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 200px;
  background-color: #000;
  border-radius: 10px;
`;

export const Img = styled.img`
  width: 230px;
  height: 150px;
  border-radius: 10px;
  scroll-snap-align: start;
`;

export const Slider = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Prev = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-right: 15px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 250ms;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Next = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: 15px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: 250ms;
  &:hover {
    transform: scale(1.2);
  }
`;

export const SlidePanel = styled.div`
  display: flex;
  width: 750px;
  align-items: center;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  > div {
    position: relative;
    display: flex;
    animation: scroll 30s linear infinite;
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-1100%);
      }
    }
    > p {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      background-color: #000;
      width: 60px;
      top: 5px;
      left: 5px;
      margin: 0px;
      color: #49fb6e;
      font-size: 25px;
    }
  }
`;

export const PrevImg = styled.img`
  width: 24px;
`;

export const NextImg = styled.img`
  width: 24px;
`;
