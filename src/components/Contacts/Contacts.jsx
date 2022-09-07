import {useMemo} from 'react';
import { useSelector } from 'react-redux';
import {List} from './Contacts.styled';
import ConactCard from "components/ConactCard/ConactCard";
import PropTypes from 'prop-types';



export default function Contacts({removeConactApp}){
    
    const {items, filter }= useSelector(store => store.contacts);
    const normalizeTodos = filter.toLowerCase();
    const visibleContacts = items.filter(contact => contact.name.toLowerCase().includes(normalizeTodos));

    const getCardMarking = useMemo(() => {
       
        return (visibleContacts.map( (user) =>
                <ConactCard 
            key={user.name}
            name = {user.name}
            number = {user.number}
            removeCard={(e)=>removeConactApp(e.currentTarget.name)}/>
            )
        );
    },[removeConactApp, visibleContacts]);
    
    return (
        <List>
            {getCardMarking}
        </List>
    )
};

Contacts.propTypes={
    removeConactApp: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired,
    )
}