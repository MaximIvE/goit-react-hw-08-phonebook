
import { createStore } from 'redux';
import { ADD_ITEM, ADD_FILTER, REMOVE_ITEM } from "./types";

let localItems = [];
const data = localStorage.getItem('contacts');
const parseContacts = JSON.parse(data);
if (parseContacts) localItems = parseContacts;

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


const reducer = (store, action) => {
    const {items, filter} = store.contacts;
    const {type, payload} = action;
    switch(type){
        case ADD_ITEM :
            return {...store, contacts: {filter, items: [ ...items, payload]}};

        case REMOVE_ITEM :
            const newItems = items.filter(contact => contact.name !== payload);
            return {...store, contacts: {filter, items: newItems}};

        case ADD_FILTER :
            return {...store, contacts: {filter: payload, items}};

        default:
            return store;
    }
};

const store = createStore(reducer, initialStore);
store.subscribe(()=>{
    console.log("123");
    localStorage["contacts"] = JSON.stringify(store.getState().contacts.items)
});
// unsubscribe();

export default store;
