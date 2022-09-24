import { useContext } from 'react';
import langContext from 'langContext';
import locale from "../../shared/materials/langauges.json";
import {Nav, StyledLink} from './Menu.styled';

 const Menu = () => {
    const lang = useContext(langContext);
    const content = locale[lang].menu;

    return(
        <Nav>
           <StyledLink key='contacts' to='/contacts'>{content.contacts}</StyledLink>
        </Nav>
    )
}

export default Menu;
