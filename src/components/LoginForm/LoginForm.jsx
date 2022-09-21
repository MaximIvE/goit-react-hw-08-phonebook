import { memo, useContext} from 'react';

import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import langContext from 'langContext';

import locale from '../../shared/materials/langauges.json';
import { DataInput, ButtonForm, Input } from './LoginForm.styled';


const LoginForm = ({addContact})=>{

        const idInputName = nanoid();
        const idInputPassword = nanoid();

        const handleSubmit = e => {
            e.preventDefault();
            const name = e.currentTarget.name.value;
          
            const password = e.currentTarget.password.value;
            console.log("name=",name, "password=",password);
            // addContact(name, number);
            e.currentTarget.reset();
        };

        const lang = useContext(langContext);
        const content= locale[lang].userform;

        return (
            
            <DataInput onSubmit={handleSubmit}>
                <label htmlFor={idInputName}>{content.name}</label>
                <Input
                    name="name"
                    type="text"
                    id={idInputName}
                    placeholder="Andriano Crosslend"
                    required
                />
                
                <label htmlFor={idInputPassword}>{content.password}</label>
                <Input
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
