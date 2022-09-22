import { useSelector } from 'react-redux';
import {Nav, StyledLink, Btn, WrapperUserMenu, UserEmail } from './UserMenu.styled';
import { getAuthisLogin, getAuthUser} from 'redux/auth/auth-selectors'; 

 const UserMenu = () => {

    const isLogin = useSelector(getAuthisLogin);
    const user = useSelector(getAuthUser);

    const LogOutMarkup = () => {
        return (<WrapperUserMenu>
                <UserEmail>{user.email}</UserEmail>
                <Btn>logout</Btn>
            </WrapperUserMenu>
        )
    }

    return(
       
        <Nav>
            {!isLogin && <>
                <StyledLink key='register'   to='/register'>register</StyledLink>
                |
                <StyledLink key='login' to='/login'>login</StyledLink>
            </>
            }
            {isLogin && <LogOutMarkup/>}
        </Nav>
        
    )
}

export default UserMenu;