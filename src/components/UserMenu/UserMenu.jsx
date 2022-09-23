import { useSelector, useDispatch } from 'react-redux';
import {Nav, StyledLink, Btn, WrapperUserMenu, UserEmail } from './UserMenu.styled';
import { getAuthisLogin, getAuthToken, getAuthUser} from 'redux/auth/auth-selectors'; 
import { logout } from 'redux/auth/auth-operations';

 const UserMenu = () => {

    const isLogin = useSelector(getAuthisLogin);
    const user = useSelector(getAuthUser);
    const token = useSelector(getAuthToken);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        console.log("Запускаємо розлогінення");
        dispatch(logout(token));
    } 


    return(
       
        <Nav>
            {isLogin && <WrapperUserMenu>
                            <UserEmail>{user.email}</UserEmail>
                            <Btn type="button" onClick={handleLogOut}>logout</Btn>
                        </WrapperUserMenu>}
                        
            {!isLogin && <>
                            <StyledLink key='register'   to='/register'>register</StyledLink>
                            |
                            <StyledLink key='login' to='/login'>login</StyledLink>
                        </>
            }
        </Nav>
        
    )
}

export default UserMenu;