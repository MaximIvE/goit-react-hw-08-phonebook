import Menu from "components/Menu";
import Settings from "components/Settings";

import  { HeaderStyled } from "./Header.styled";

const Header = ({langauge, changeLangauge, changeBackground}) => {

    return (
        <HeaderStyled>
            <Menu/>
            <Settings 
                langauge={langauge} 
                changeLangauge = {changeLangauge}
                changeBackground = {changeBackground}
      />
        </HeaderStyled>
    )
};

export default Header;