import { createReducer } from "@reduxjs/toolkit";
// import { addItem, removeItems, fetchItemsLoading, fetchItemsSuccess, fetchItemsError } from "./items-actions";
import actions from "./items-actions";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const itemsReducer = createReducer(initialState, {
    //Отримання всіх items з api в store
    [actions.fetchItemsLoading]: (store) => {return {...store, loading: true, error: null}},
    [actions.fetchItemsSuccess]: (store, {payload}) => {return {...store, items: payload, loading: false}},
    [actions.fetchItemsError]: (store, {payload}) => {return {...store, error: payload, loading: false}},

    //Додавання одного item до store
    [actions.addItemsLoading]: (store) => {return {...store, loading: true, error: null}},
    [actions.addItemsSuccess]: (store, {payload}) => {return {...store, items: [...store.items, payload], loading: false}},
    [actions.addItemsError]: (store, {payload}) => {return {...store, error: payload, loading: false}},
    
    //Видалення одного item з store
    [actions.removeItemsLoading]: (store) => {return {...store, loading: true, error: null}},
    [actions.removeItemsSuccess]: (store, {payload}) => {return {...store, loading: false, items: store.items.filter(({id}) => id !== payload), }},
    [actions.removeItemsError]: (store, {payload}) => {return {...store, error: payload, loading: false}},


    // [actions.addItem.type]: (store, {payload}) =>   {return {...store, items: [...store.items, payload]}},
    // [actions.removeItems.type]: (store, {payload}) => {return {...store, items: [...store.items.filter(contact => contact.name !== payload)]}},
        
});

export default itemsReducer;