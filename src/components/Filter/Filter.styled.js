import styled from 'styled-components';

export const FilterContainer = styled.div`
display: flex;
width: 859px;
height: 74px;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;
margin-bottom: 50px;
`;

export const Form = styled.form`
display: flex;
`;

export const BrandWrapper = styled.div`
position: relative;
width: 224px;
height: 100%;
margin-right: 18px;
`;

export const LabelBrand = styled.label`
color: #8A8A89;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 18px;
`;

export const SelectBrand = styled.select`
width: 224px;
height: 46px;
color: #121417;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 20px;
border: none;
border-radius: 14px;
background-color: #F7F7FB;
padding-left: 18px;
padding-right: 18px;
margin-top: 8px;
appearance: none;
&:focus {
 border: none;
}
`;

export const ArrowUp = styled.img`
position: absolute;
top: 43px;
right: 16px;
`;

export const ArrowDown = styled.img`
position: absolute;
top: 43px;
right: 16px;
`;

export const Option = styled.option`
color: rgba(18, 20, 23, 0.20);
background-color: #fff;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 20px;
&:hover {
    color: #000;
    background-color: #fff;
}
`;

export const PriceWrapper = styled.div`
width: 126px;
margin-right: 18px;
`;

export const LabelPrice = styled.label`
color: #8A8A89;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 18px;
`;

export const SelectPrice = styled.select`
width: 126px;
height: 46px;
color: #121417;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 20px;
border: none;
border-radius: 14px;
background-color: #F7F7FB;
padding-left: 18px;
margin-top: 8px;
`;

export const MileageWrapper = styled.div`

`;

export const MileageInputWrapper = styled.div`
display: flex;
`;

export const LabelMileage = styled.label`
color: #8A8A89;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 18px;
`;

export const InputMileageFrom = styled.input`
width: 133px;
height: 46px;
color: #121417;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 20px;
border: none;
border-right: 1px solid #e1e1e4;
border-radius: 14px;
border-top-right-radius: 0px;
border-bottom-right-radius: 0px;
background-color: #F7F7FB;
padding-left: 24px;
margin-top: 8px;
`;
export const InputMileageTo = styled.input`
width: 134px;
height: 46px;
color: #121417;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 20px;
border: none;
border-radius: 14px;
border-top-left-radius: 0px;
border-bottom-left-radius: 0px;
background-color: #F7F7FB;
padding-left: 24px;
margin-top: 8px;
margin-right: 18px;
`;

export const Button = styled.button`
display: flex;
width: 136px;
height: 48px;
border: none;
justify-content: center;
align-items: center;
border-radius: 12px;
background: #3470FF;
color: var(--White, #FFF);
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;
margin-top: auto;
cursor: pointer;
&:hover {
    background-color: #0B44CD;
}
`;