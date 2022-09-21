import styled from 'styled-components';
import { Button } from '../../styles/placeholders.styled';


export const DataInput = styled.form`
  font-size: 1.1em;
    text-align: start;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 4px 20px;
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
    @media (min-width:480px){
        padding: 12px;
        max-width: 16em;
  };
  
`;

export const Input = styled.input`
padding: 2px;
font-size: 1em;
margin-bottom: 8px;
`;

export const ButtonForm = styled(Button)`
margin-top: 12px;
width: 8em;
margin-left: auto;
margin-right: auto;
font-size: 1em;
`;
