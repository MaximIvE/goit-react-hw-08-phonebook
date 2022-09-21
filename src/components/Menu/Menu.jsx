import {Nav, StyledLink} from './Menu.styled';

 const Menu = () => {
    return(
        <Nav>
           <StyledLink key='contacts' to='/contacts'>contacts</StyledLink>
        </Nav>
    )
}

export default Menu;