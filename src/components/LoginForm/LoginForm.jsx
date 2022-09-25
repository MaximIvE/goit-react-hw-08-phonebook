import { memo, useContext} from 'react';

import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import langContext from 'langContext';

import locale from '../../shared/materials/langauges.json';
import { DataInput, ButtonForm, Input } from './LoginForm.styled';


const LoginForm = ({onSubmit, handleValue})=>{

        const idInputEmail = nanoid();
        const idInputPassword = nanoid();

        const handleSubmit = e => {
            e.preventDefault();
            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;
            onSubmit({email, password});
            // e.currentTarget.reset();
        };

        const lang = useContext(langContext);
        const content= locale[lang].userform;


        return (
            
            <DataInput onSubmit={handleSubmit}>
                <label htmlFor={idInputEmail}>{content.email}</label>
                <Input 
                onChange={handleValue}
                    name="email"
                    type="email"
                    id={idInputEmail}
                    required
                />
                
                <label htmlFor={idInputPassword}>{content.password}</label>
                <Input
                    onChange={handleValue}
                    name="password"
                    type="password"
                    id={idInputPassword}
                    required
                />

                <ButtonForm 
                    name="register" 
                    >{content.loginbuttonText}
                </ButtonForm>
            </DataInput>
            
        );
};

export default memo(LoginForm);

// DataInputForm.propTypes={
//     addContact: PropTypes.func.isRequired,
// }
