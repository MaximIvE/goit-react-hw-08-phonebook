import { useContext } from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Wrapper } from './RegisterPage.styled';

import langContext from 'langContext';
import locale from '../../shared/materials/langauges.json';

const RegisterPage = () => {
    const lang = useContext(langContext);
    const content= locale[lang].pagesUser;
    console.log(content);

    return (
        <Wrapper>
            <h2>{content.registerHeader}</h2>
            <RegisterForm/>
        </Wrapper>
    )
}

export default RegisterPage;