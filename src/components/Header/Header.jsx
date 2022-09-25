import { useContext } from "react";
import { useSelector } from "react-redux";

import Menu from "components/Menu";
import UserMenu from "components/UserMenu";
import Settings from "components/Settings";

import { getAuthisLogin } from "redux/auth/auth-selectors";
import langContext from 'langContext';
import locale from '../../shared/materials/langauges.json';

import  { HeaderStyled, WrapperUserMenu, Notific } from "./Header.styled";
import { getAuthError } from "redux/auth/auth-selectors";

const Header = (props) => {
    const isLogin = useSelector(getAuthisLogin);
    const {contacts} = useSelector(store => store);
    const authError = useSelector(getAuthError);

    const lang = useContext(langContext);
    const content = locale[lang];

    return (
        <HeaderStyled isLogin={isLogin}>
            {isLogin && <Menu/>}
            <WrapperUserMenu>
                <UserMenu/>
                <Settings {...props}/>
                {(contacts.error.status === 0 || authError.status === 0) && <Notific>{content.notificInternet}</Notific>}
            </WrapperUserMenu>
            
        </HeaderStyled>
    )
};

export default Header;