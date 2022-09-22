import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Wrapper, Error} from './RegisterPage.styled';

import langContext from 'langContext';
import locale from '../../shared/materials/langauges.json';
import { signup } from 'redux/auth/auth-operations';
import { getAuthError, getAuthisLogin } from 'redux/auth/auth-selectors';

const RegisterPage = () => {
    const lang = useContext(langContext);
    const content= locale[lang].pagesUser;

    const dispatch=useDispatch();
    const {status, message, code} = useSelector(getAuthError);
    const isLogin = useSelector(getAuthisLogin);

    const onRegister = (data) => {
        // console.log(data);
        dispatch(signup(data))
    }

    const codeMessage = () => {
        return code === 11000 ? "Email in use" : message;
    };

    if(isLogin){
        return <Navigate to="/contacts"/>
    }

    return (
        <Wrapper>
            <h2>{content.registerHeader}</h2>
            <RegisterForm onSubmit={onRegister}/>
            {status && <Error>{codeMessage()}</Error>}
        </Wrapper>
    );
};

export default RegisterPage;