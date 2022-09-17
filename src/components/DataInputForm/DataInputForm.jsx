import { memo, useContext} from 'react';

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import langContext from 'langContext';

import locale from '../../shared/materials/langauges.json';
import { DataInput, ButtonForm } from './DataInputForm.styled';


const DataInputForm = ({addContact})=>{

        const idInputName = nanoid();
        const idInputNumber = nanoid();

        const handleSubmit = e => {
            e.preventDefault();
            const name = e.currentTarget.name.value;
            const number = e.currentTarget.number.value;
            addContact(name, number);
            e.currentTarget.reset();
        };

        const lang = useContext(langContext);
        const content= locale[lang].phonebook;

        return (
            
            <DataInput onSubmit={handleSubmit}>
                <label htmlFor={idInputName}>{content.name}</label>
                <input
                    name="name"
                    type="text"
                    id={idInputName}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                
                <label htmlFor={idInputNumber}>{content.number}</label>
                <input
                    name="number"
                    type="tel"
                    id={idInputNumber}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                <ButtonForm 
                    type='submit' 
                    name="contacts" 
                    >{content.buttonText}
                </ButtonForm>
            </DataInput>
            
        );
};

export default memo(DataInputForm);

DataInputForm.propTypes={
    addContact: PropTypes.func.isRequired,
}
