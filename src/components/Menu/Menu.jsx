import {Nav, StyledLink} from './Menu.styled';

 const Menu = () => {
    return(
    <>
        <Nav>
            <StyledLink key='register'   to='/register'>register</StyledLink>
            <StyledLink key='login' to='/login'>login</StyledLink>
            <StyledLink key='contacts' to='/contacts'>contacts</StyledLink>
        </Nav>
    </>
    )
}

export default Menu;