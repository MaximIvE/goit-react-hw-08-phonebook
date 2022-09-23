import { memo, useContext} from 'react';

import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import langContext from 'langContext';

import locale from '../../shared/materials/langauges.json';
import { DataInput, ButtonForm, Input } from './RegisterForm.styled';


const RegisterForm = ({onSubmit})=>{

        const idInputName = nanoid();
        const idInputEmail = nanoid();
        const idInputPassword = nanoid();

        const handleSubmit = e => {
            e.preventDefault();
            const name = e.currentTarget.name.value;
            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;
            // console.log("name=",name,"; email=",email,"; password=",password);
            onSubmit({name, email, password});
            // e.currentTarget.reset();
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
                    required
                />
                
                <label htmlFor={idInputEmail}>{content.email}</label>
                <Input
                    name="email"
                    type="email"
                    id={idInputEmail}
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
                    >{content.registerbuttonText}
                </ButtonForm>
            </DataInput>
            
        );
};

export default memo(RegisterForm);

// DataInputForm.propTypes={
//     addContact: PropTypes.func.isRequired,
// }
