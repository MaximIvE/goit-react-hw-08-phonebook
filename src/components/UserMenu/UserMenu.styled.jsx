import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const Nav = styled.nav`
    padding: 8px 0;
`;

export const StyledLink = styled(NavLink)`
padding: 8px;
font-size: 1em;
font-weight: 400;
color: rgba(255, 255, 255, 0.96);
text-decoration: none;

    &.active {
    color: rgba(255, 255, 255, 0.6);
    }
`;

export const WrapperUserMenu = styled.div`
    display: flex;
    align-items: center;
    
    padding: 8px 0;
`;

export const UserEmail = styled.p`
    margin-right: 24px;
`;

export const Btn = styled.button`
    background-color: rgba(255, 255, 255, 0);
    border: none;
    padding: 8px;
    font-size: 1em;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9);
    cursor: pointer;
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
`;
