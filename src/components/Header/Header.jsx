import Menu from "components/Menu";
import UserMenu from "components/UserMenu";
import Settings from "components/Settings";

import  { HeaderStyled, WrapperUserMenu } from "./Header.styled";

const Header = (props) => {

    return (
        <HeaderStyled>
            <Menu/>
            <WrapperUserMenu>
                <UserMenu/>
                <Settings {...props}/>
            </WrapperUserMenu>
        </HeaderStyled>
    )
};

export default Header;