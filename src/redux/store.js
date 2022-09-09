import { createStore } from 'redux';
import reducer from './reducer';

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

const store = createStore(reducer, initialStore);
store.subscribe(()=>{
    console.log("123");
    localStorage["contacts"] = JSON.stringify(store.getState().contacts.items)
});
// unsubscribe();

export default store;
