import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Background, Container, Message } from "./App.styled";

import DataInputForm from '../DataInputForm/DataInputForm';
import Section from '../Section/Section';
import Contacts from '../Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Settings from 'components/Settings';
import langContext from 'langContext';
import locale from '../../materials/langauges.json';
import backgroundImg from '../../images/background.jpg';

// import { addItem, removeItems } from 'redux/items/items-actions';
import { fetchItems, addItem, removeItem } from 'redux/items/items-operations';


const  App = () => {

  const  {items} = useSelector(store => store.contacts);
  // console.log("items", items);
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
    if (items.find(item => item.name === name)) return alert(name + " " + content.notific);
    dispatch( addItem({name, phone}) );
   
  },[items, content.notific, dispatch]);
 
  const removeConactApp = useCallback( id => {
    dispatch(removeItem(id));
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
          <Section>{content.phonebook.header}
            {<DataInputForm 
              addContact={addContact}
            />}
          </Section>
          {items.length > 0 
          ? <Section>{content.contacts.header}
              <Filter />
              <Contacts 
                removeConactApp={removeConactApp}
              />
            </Section>
          : <Message>{content.message}</Message>}
      </Container>
      </Background>
      </langContext. Provider>
    );
};

export default App;
