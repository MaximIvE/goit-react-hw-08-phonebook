import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Nav, StyledLink, Btn, WrapperUserMenu, UserEmail } from './UserMenu.styled';
import { getAuthisLogin, getAuthToken, getAuthUser} from 'redux/auth/auth-selectors'; 
import langContext from 'langContext';
import { logout } from 'redux/auth/auth-operations';
import locale from "../../shared/materials/langauges.json"

 const UserMenu = () => {

    const lang = useContext(langContext);
    const content= locale[lang].useMenu;

    const isLogin = useSelector(getAuthisLogin);
    const user = useSelector(getAuthUser);
    const token = useSelector(getAuthToken);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logout(token));
    } 

    return(
       
        <Nav>
            {isLogin && <WrapperUserMenu>
                            <UserEmail>{user.email}</UserEmail>
                            <Btn type="button" onClick={handleLogOut}>{content.logout}</Btn>
                        </WrapperUserMenu>}

            {!isLogin && <>
                            <StyledLink key='register'   to='/register'>{content.register}</StyledLink>
                            |
                            <StyledLink key='login' to='/login'>{content.login}</StyledLink>
                        </>
            }
        </Nav>
        
    )
}

export default UserMenu;