import { useContext } from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { Wrapper } from './LoginPage.styled';

import langContext from 'langContext';
import locale from '../../shared/materials/langauges.json';

const LoginPage = () => {
    const lang = useContext(langContext);
    const content= locale[lang].pagesUser;
    console.log(content);

    return (
        <Wrapper>
            <h2>{content.loginHeader}</h2>
            <LoginForm/>
        </Wrapper>
    )
}

export default LoginPage;