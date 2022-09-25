import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';
import { Wrapper, Error } from './LoginPage.styled';


import langContext from 'langContext';
import locale from '../../shared/materials/langauges.json';
import { login } from 'redux/auth/auth-operations';
import { getAuthError, getAuthisLogin } from 'redux/auth/auth-selectors';
import { changeError} from "../../redux/auth/auth-slice";

const LoginPage = () => {
        const lang = useContext(langContext);
    const content= locale[lang].pagesUser;

    const dispatch = useDispatch();
    const {status, message, visible} = useSelector(getAuthError);
    const isLogin = useSelector(getAuthisLogin);

    const onLogin = (data) => {
        dispatch(login(data))
    };

    if(isLogin){
        return <Navigate to="/contacts"/>
    };

    const handleValue = () => {
        if (!status) return;
        dispatch(changeError(0));
    }

    if (status &&  visible === 1){
        setTimeout(() => {
            dispatch(changeError(0));
        }, 4000);
    };
    
    return (
        <Wrapper>
            <h2>{content.loginHeader}</h2>
            <LoginForm onSubmit={onLogin} handleValue={handleValue}/>
            {(status > 0 && status !== 200) && <Error visible={visible}>{message}</Error>}
        </Wrapper>
    )
}

export default LoginPage;