import styled from 'styled-components';

export const BackgroundBtn = styled.button`
    margin:8px 4px;
    padding:0;
    background-color:  rgba(255,255,255,0.8);
    cursor: pointer;
    height:30px;
    width: 30px;
    transition-property: background-color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0, 0, 0.1, 1);
    border-radius:20%;
     &:hover{
        background-color:  rgba(255,255,255,0.9);
    } 
`

export const iconStyle = {
    backgroundColor: "rgba(0,0,0,0)",
    height: "100%",
    width: "auto",
    fill: "#313c3d",
}