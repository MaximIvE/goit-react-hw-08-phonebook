import { createReducer } from "@reduxjs/toolkit";
// import { addItem, removeItems, fetchItemsLoading, fetchItemsSuccess, fetchItemsError } from "./items-actions";
import actions from "./items-actions";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const itemsReducer = createReducer(initialState, {
    //Отримання всіх items з api
    [actions.fetchItemsLoading]: (store) => {return {...store, loading: true, error: null}},
    [actions.fetchItemsSuccess]: (store, {payload}) => {return {...store, items: payload, loading: false}},
    [actions.fetchItemsError]: (store, {payload}) => {return {...store, error: payload, loading: false}},

    //Додавання одного item до api
    [actions.addItemsLoading]: (store) => {return {...store, loading: true, error: null}},
    [actions.addItemsSuccess]: (store, {payload}) => {return {...store, items: [...store.items, payload], loading: false}},
    [actions.addItemsError]: (store, {payload}) => {return {...store, error: payload, loading: false}},


    // [actions.addItem.type]: (store, {payload}) =>   {return {...store, items: [...store.items, payload]}},
    // [actions.removeItems.type]: (store, {payload}) => {return {...store, items: [...store.items.filter(contact => contact.name !== payload)]}},
        
});

export default itemsReducer;