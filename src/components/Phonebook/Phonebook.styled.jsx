import styled from 'styled-components';

export const Container = styled.div`
    height: calc(100vh - 100px);
    
    color: rgba(255, 255, 255, 0.96);
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
    @media screen and (min-width:480px){
        display: flex;
    }
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



