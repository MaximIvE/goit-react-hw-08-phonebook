import { useSelector } from "react-redux";

import Menu from "components/Menu";
import UserMenu from "components/UserMenu";
import Settings from "components/Settings";

import { getAuthisLogin } from "redux/auth/auth-selectors";

import  { HeaderStyled, WrapperUserMenu } from "./Header.styled";

const Header = (props) => {
    const isLogin = useSelector(getAuthisLogin);

    return (
        <HeaderStyled isLogin={isLogin}>
            {isLogin && <Menu/>}
            <WrapperUserMenu>
                <UserMenu/>
                <Settings {...props}/>
            </WrapperUserMenu>
        </HeaderStyled>
    )
};

export default Header;