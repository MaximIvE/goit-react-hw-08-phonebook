import styled from 'styled-components';
import { Button } from '../../styles/placeholders.styled'

export const Card = styled.li`
    display: grid;
    grid-template-columns: 1.4fr 1fr 0.4fr;
    padding: 4px 4px 4px 8px;
    align-items: center;
    height: 24px;
    margin: 2px;
    border-bottom:  rgba(0,0,0,0.1) 1px solid;
    background-color: rgba(0, 0, 0, 0.5);
    color: #e9f1f2;
    text-shadow: 0 0 0.8em black;
    font-size: 0.8em;
    @media screen and (min-width:640px){
        padding: 8px;
        font-size: 1em;
    }
`;

export const Name = styled.p`
margin-right: 8px;
`;

export const Phone = styled.p`
margin-right: 8px;
`;

export const ButtonCard = styled(Button)`
padding: 4px 6px 4px 4px; 
font-size: 0.8em;
max-width: 5.6em;
`;