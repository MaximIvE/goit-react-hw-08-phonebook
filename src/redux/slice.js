import { createSlice } from "@reduxjs/toolkit";

const parseContacts = JSON.parse(localStorage.getItem('contacts'));
const localItems = parseContacts ? parseContacts : []

const initialStore = {
    contacts: {
      items: localItems,
   //    items: [
   //     {name: 'Rosie Simpson', number: '459-12-56'},
   //     {name: 'Hermione Kline', number: '443-89-12'},
   //     {name: 'Eden Clements', number: '645-17-79'},
   //     {name: 'Annie Copeland', number: '227-91-26'},
   //    ],
      filter: ''
    }
};

// Структура store: { contacts: {
//     items: [],
//     filter: "",
// }}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialStore,
    reducers: {
        addItem: (store, {payload}) => {
            const {items, filter} = store.contacts;
            return {...store, contacts: {filter, items: [ ...items, payload]}}; },
    
        removeItem: (store, {payload}) => {
            const {items, filter} = store.contacts;
            return {...store, contacts: {filter, items: items.filter(contact => contact.name !== payload)}}; },
    
        addFilter: (store, {payload}) => {
            const {items} = store.contacts;
            return {...store, contacts: {filter: payload, items}}; },
    }
});

export const {addItem, removeItem, addFilter} = contactsSlice.actions;

export default contactsSlice.reducer;