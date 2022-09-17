import styled from "styled-components";

export const LangaugeStyled = styled.div`
  width: 72px;
  margin:8px 4px;
  padding:0;
  border: 1px solid grey;
  border-radius: 15px;
  background-color: rgba(255,255,255,0.8);
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0, 0.1, 1);

  &:hover{
        background-color: rgba(255,255,255,1);
    };
`;

export const Btn = styled.button`
width: 32px;
height:26px;
padding: 2px;
background-color:  rgba(0,0,0,0);
cursor: pointer;
border:none;

color: #000;
font-weight: 400;
font-size: 14px;
transition-property: font;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(0, 0, 0.1, 0.9);

&:first-child{
    border-radius: 14px 0 0 14px;
};

&:last-child{
    border-radius: 0 14px 14px 0;
};

    &:hover{
        font-weight: 600;
        background-color: rgba(255,255,255,1);
    };
`;