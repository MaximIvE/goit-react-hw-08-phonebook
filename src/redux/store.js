import { createStore } from 'redux';
import { ADD_ITEM, ADD_FILTER } from "./types";

const initialStore = {
         contacts: {
           items: [
            {name: 'Rosie Simpson', number: '459-12-56'},
            {name: 'Hermione Kline', number: '443-89-12'},
            {name: 'Eden Clements', number: '645-17-79'},
            {name: 'Annie Copeland', number: '227-91-26'},
           ],
           filter: ''
         }
       };


const reducer = (store = initialStore, action) => {
    const {items, filter} = store.contacts;
    const {type, payload} = action;
    switch(type){
        case ADD_ITEM :
            const newItems = [ ...items, payload];
            return {...store, contacts: {filter, items: newItems}};

        case ADD_FILTER :

            return {...store, contacts: {filter: payload, items}};

        default:
            return store;
    }
};

const store = createStore(reducer);
export default store;

// console.log(store.getState())