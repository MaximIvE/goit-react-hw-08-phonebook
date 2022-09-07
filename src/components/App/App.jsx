import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Message } from "./App.styled";

import DataInputForm from '../DataInputForm/DataInputForm';
import Section from '../Section/Section';
import Contacts from '../Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import Settings from 'components/Settings';
import langContext from 'langContext';
import locale from '../../materials/langauges.json';
import backgroundImg from '../../images/background.jpg';

import { addItem } from 'redux/actions';

const  App = () => {

  const {items }= useSelector(store => store.contacts);

  const [contacts, setContacts] = useState(()=>localContacts('contacts'));
  //Відмальовування активної мови відбувається в Langaguge, а цей стейт потрібен для контексту
  const [langauge, setLangauge] = useState(()=>localContacts('langauge'));
  const [background, setBackground] = useState(()=>localContacts('background'));

  const content = locale[langauge];

  const dispatch = useDispatch();


  function localContacts(key){
    const data = localStorage.getItem(key);
    if(!data){
      if(key === 'contacts')return[];
      if(key === 'langauge')return'Ua';
      if(key === 'background')return backgroundImg;
    }
    const parseContacts = JSON.parse(data);
    if (parseContacts)return parseContacts;
  };
  
  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },[contacts]);

  useEffect(()=>{
    localStorage.setItem('background', JSON.stringify(background));
  },[background]);

  const addContact = useCallback((name, number)=>{
    if (items.find(item => item.name === name)){
      alert(name + " " + content.notific);
      return;
    };

    const action = addItem({name, number});
    dispatch(action);

    // setContacts(prevState=>{return [{name, number}, ...prevState]});
  },[items, content.notific, dispatch]);


  const handleBackground=(newbackground)=>{
    setBackground(newbackground);
  };

  const removeConactApp=useCallback((id)=>{
    const newContacts = contacts.filter(contact => {return ((contact.name) !== id )});
    setContacts(newContacts);
  },[contacts]);

  const changeLangauge = useCallback((lang)=>{return setLangauge(lang)},[setLangauge])

    return (
      <langContext. Provider value={langauge}>
      
      <Container bg={background}>
          <Settings 
        langauge={langauge} 
        changeLangauge={changeLangauge}
        changeBackground={handleBackground}
      />
          <Section>{content.phonebook.header}
            {<DataInputForm 
              addContact={addContact}
            />}
          </Section>
          {contacts.length > 0 
          ? <Section>{content.contacts.header}
              <Filter />
              <Contacts 
                removeConactApp={removeConactApp}
              />
            </Section>
          : <Message>{content.message}</Message>}
      </Container>
      </langContext. Provider>
    );
};

export default App;
