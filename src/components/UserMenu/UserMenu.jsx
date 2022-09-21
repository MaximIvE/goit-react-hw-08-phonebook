import {Nav, StyledLink} from './UserMenu.styled';

 const UserMenu = () => {
    return(
       
        <Nav>
            <StyledLink key='register'   to='/register'>register</StyledLink>
            |
            <StyledLink key='login' to='/login'>login</StyledLink>
        </Nav>
        
    )
}

export default UserMenu;