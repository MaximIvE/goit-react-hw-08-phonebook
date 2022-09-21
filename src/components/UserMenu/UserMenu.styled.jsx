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