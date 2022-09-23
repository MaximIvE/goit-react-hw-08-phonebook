import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';
import { Wrapper, Error } from './LoginPage.styled';


import langContext from 'langContext';
import locale from '../../shared/materials/langauges.json';
import { login } from 'redux/auth/auth-operations';
import { getAuthError, getAuthisLogin } from 'redux/auth/auth-selectors';

const LoginPage = () => {
    const lang = useContext(langContext);
    const content= locale[lang].pagesUser;
    // console.log(content);

    const dispatch = useDispatch();
    const {status, message} = useSelector(getAuthError);
    const isLogin = useSelector(getAuthisLogin);

    const onLogin = (data) => {
        dispatch(login(data))
    };

    if(isLogin){
        return <Navigate to="/contacts"/>
    }

    return (
        <Wrapper>
            <h2>{content.loginHeader}</h2>
            <LoginForm onSubmit={onLogin}/>
            {status && <Error>{message}</Error>}
        </Wrapper>
    )
}

export default LoginPage;