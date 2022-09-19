import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Background, Container, Message } from "./App.styled";

import DataInputForm from '../DataInputForm/DataInputForm';
import Section from '../Section/Section';
import Contacts from '../Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Settings from 'components/Settings';
import langContext from 'langContext';
import locale from '../../shared/materials/langauges.json';
import backgroundImg from '../../images/background.jpg';

// import { addItem, removeItems } from 'redux/items/items-actions';
import { fetchItems, addItem, removeItem } from 'redux/items/items-operations';
import { setFilter } from 'redux/filter/filter-slice'; 


const  App = () => {

  const {contacts} = useSelector(store => store);
  const  {items, loading} = contacts;
  // console.log("items", items);
  // console.log("loading", loading);

  //Відмальовування активної мови відбувається в Langaguge, а цей стейт потрібен для контексту
  const [langauge, setLangauge] = useState(()=>localContacts('langauge'));
  const [background, setBackground] = useState(()=>localContacts('background'));

  const content = locale[langauge];

  const dispatch = useDispatch();
  function localContacts(key){
    const data = localStorage.getItem(key);
    if(!data){
      if(key === 'langauge')return'Ua';
      if(key === 'background')return backgroundImg;
    }
    const parseContacts = JSON.parse(data);
    if (parseContacts)return parseContacts;
  };
  
  useEffect(()=>{
    dispatch(fetchItems());
  },[dispatch]);

  useEffect(()=>{
    localStorage.setItem('background', JSON.stringify(background));
  },[background]);


  const addContact = useCallback((name, phone)=>{
    // if (items.find(item => item.name === name)) return alert(name + " " + content.notific);
    dispatch( addItem({name, phone}) );
   
  // },[items, content.notific, dispatch]);
  },[dispatch]);
 
  const removeConactApp = useCallback( async(id, length) => {
    await dispatch(removeItem(id));
    if (length === 1) dispatch(setFilter(""));
  },[dispatch]);

    return (
      <langContext. Provider value={langauge}>
      <Background bg={background}>
      <Container bg={background}>
          <Settings 
        langauge={langauge} 
        changeLangauge = {useCallback( lang => setLangauge(lang),[setLangauge] )}
        changeBackground = {newbackground => setBackground(newbackground)}
      />
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
      </Background>
      </langContext. Provider>
    );
};

export default App;
