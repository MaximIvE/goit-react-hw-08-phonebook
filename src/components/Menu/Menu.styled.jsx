import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    padding: 10px 0;
    display: inline-block;
    width: 100%;
`;

export const StyledLink = styled(NavLink)`
padding: 20px;
font-size: larger;
font-weight: 600;
color: black;
text-decoration: none;

    &.active {
    color: red;
    }
`;