import React, { useEffect, useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Message } from "./Phonebook.styled";

import DataInputForm from '../DataInputForm/DataInputForm';
import Section from '../Section/Section';
import Contacts from '../Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import langContext from 'langContext';
import locale from '../../shared/materials/langauges.json';

import { fetchItems, addItem, removeItem } from 'redux/items/items-operations';
import { setFilter } from 'redux/filter/filter-slice'; 


const  Phonebook = () => {

  const {contacts} = useSelector(store => store);
  const  {items, loading} = contacts;

  //Відмальовування активної мови відбувається в Langauge, а цей стейт потрібен для контексту
  const lang = useContext(langContext);
  const content = locale[lang];

  const dispatch = useDispatch();
  
  //Завантаження контактів з бекенду
  useEffect(()=>{
    dispatch(fetchItems());
  },[dispatch]);

  const addContact = useCallback((name, phone)=>{
    if (items.find(item => item.name === name)) return alert(name + " " + content.notific);
   dispatch( addItem({name, phone}) );
  },[items, content.notific, dispatch]);
 
  const removeConactApp = useCallback( async(id, length) => {
    await dispatch(removeItem(id));
    if (length === 1) dispatch(setFilter(""));
  },[dispatch]);

    return (
      <Container >
          <Section element="form">{content.phonebook.header}
            {<DataInputForm 
              addContact={addContact}
            />}
          </Section>

          {items.length > 0 
          && <Section element="contacts">{content.contacts.header}
              <Filter />
              <Contacts 
                removeConactApp={removeConactApp}
              />
            </Section>}

          {(items.length === 0 && !loading) && <Message>{content.message}</Message>}
      </Container>
    );
};

export default Phonebook;
