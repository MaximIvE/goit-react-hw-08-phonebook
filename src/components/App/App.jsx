import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";

import { Container } from './App.styled';
import Menu from 'components/Menu';

const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));

const  App = () => {
  const UseRoutes = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/contacts" element={<ContactsPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="*" element={<LoginPage/>}/>
            </Routes>
        </Suspense>
    )
}

    return (
      <Container>
        <Menu/>
        <hr/>
        <UseRoutes/>
      </Container>
    );
};

export default App;