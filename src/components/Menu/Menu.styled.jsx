import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const Nav = styled.nav`
    padding: 8px 0;
`;

export const StyledLink = styled(NavLink)`
padding: 12px 20px;
font-size: 1.4em;
font-weight: 500;
color: rgba(255, 255, 255, 0.96);
text-decoration: none;

    &.active {
    color: rgba(255, 255, 255, 0.6);
    }
`;