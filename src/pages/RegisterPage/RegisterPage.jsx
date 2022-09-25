import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Wrapper, Error} from './RegisterPage.styled';

import langContext from 'langContext';
import locale from '../../shared/materials/langauges.json';
import { signup } from 'redux/auth/auth-operations';
import { getAuthError, getAuthisLogin } from 'redux/auth/auth-selectors';
import { changeError } from "../../redux/auth/auth-slice";

const RegisterPage = () => {
    const lang = useContext(langContext);
    const content= locale[lang].pagesUser;

    const dispatch=useDispatch();
    const {status, message, visible} = useSelector(getAuthError);
    const isLogin = useSelector(getAuthisLogin);

    const onRegister = (data) => {
        // console.log(data);
        dispatch(signup(data))
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
            <h2>{content.registerHeader}</h2>
            <RegisterForm onSubmit={onRegister} handleValue={handleValue}/>
            {(status && message) && <Error visible={visible}>{message || " "}</Error>}
        </Wrapper>
    );
};

export default RegisterPage;