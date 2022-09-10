import { createSlice } from "@reduxjs/toolkit";

// const parseContacts = JSON.parse(localStorage.getItem('contacts'));
// const localItems = parseContacts ? parseContacts : []

// const initialStore = {
//     contacts: {
//         items: [],
//     //   items: localItems,
//    //    items: [
//    //     {name: 'Rosie Simpson', number: '459-12-56'},
//    //     {name: 'Hermione Kline', number: '443-89-12'},
//    //     {name: 'Eden Clements', number: '645-17-79'},
//    //     {name: 'Annie Copeland', number: '227-91-26'},
//    //    ],
//       filter: ''
//     }
// };

// Структура store: { contacts: {
//     items: [],
//     filter: "",
// }}

const itemsSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        addItem: (store, {payload}) => [...store, payload],
        
        removeItem: (store, {payload}) => store.filter(contact => contact.name !== payload),
    }
});

export const {addItem, removeItem} = itemsSlice.actions;

export default itemsSlice.reducer;