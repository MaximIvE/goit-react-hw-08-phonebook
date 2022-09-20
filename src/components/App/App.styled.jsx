import styled from 'styled-components';

export const Background = styled.div`
    background-color: rgba(255, 255, 255, 0.9); 
    background-image:  url(${props=> props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    background-attachment: fixed;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    color: #fff; 
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
`;

export const Message = styled.h2`
padding-top: 20px;
margin-top: 20px;
text-align: center;
font-style: italic;
font-weight: 500;
font-size: 20px;
width: 80vw;
text-shadow: 0px 0px 0.8em black, 0 0 0.4em black;
`;
