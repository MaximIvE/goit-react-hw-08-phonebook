import React, { lazy, Suspense, useState, useEffect, useCallback }  from 'react';
import {Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import langContext from 'langContext';
import { getAuthisLogin } from 'redux/auth/auth-selectors';
// import locale from '../../shared/materials/langauges.json';
import backgroundImg from '../../images/background.jpg';
import { Container, Background } from './App.styled';

import locale from "../../shared/materials/langauges.json";


import Header from 'components/Header';
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));

const  App = () => {
  const [langauge, setLangauge] = useState(()=>localContacts('langauge'));
  const [background, setBackground] = useState(()=>localContacts('background'));
  const isLogin = useSelector(getAuthisLogin);
  
  

  const content = locale[langauge];

  function localContacts(key){
    const data = localStorage.getItem(key);
    // console.log("localStorageData:", data);
    if(!data){
      
      if(key === 'langauge')return'Ua';
      if(key === 'background')return backgroundImg;
    }
    const parseContacts = JSON.parse(data);
    if (parseContacts)return parseContacts;
  };

  useEffect(()=>{
    localStorage.setItem('background', JSON.stringify(background));
  },[background]);

  
  const UseRoutes = () => {
    return (
        <Suspense fallback={<div>{content.loading}...</div>}>
            <Routes>
                {isLogin && <Route path="/contacts" element={<ContactsPage/>}/>}
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="*" element={<LoginPage/>}/>
            </Routes>
        </Suspense>
    )
}

    return (
      <langContext. Provider value={langauge}>
      <Background bg={background}>
        <Container>
            <Header
                changeLangauge = {useCallback( lang => setLangauge(lang),[setLangauge] )}
                changeBackground = {newbackground => setBackground(newbackground)}/>
            <hr/>
            <UseRoutes/>
        </Container>
      </Background>
      </langContext. Provider>
    );
};

export default App;