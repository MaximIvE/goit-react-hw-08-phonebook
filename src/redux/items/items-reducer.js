import { createReducer } from "@reduxjs/toolkit";
import { addItem, removeItems, fetchItemsLoading, fetchItemsSuccess, fetchItemsError } from "./items-actions";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const itemsReducer = createReducer(initialState, {

    [fetchItemsLoading]: (store) => {return {...store, loading: true, error: null}},
    [fetchItemsSuccess]: (store, {payload}) => {return {...store, items: payload, loading: false}},
    [fetchItemsError]: (store, {payload}) => {return {...store, error: payload, loading: false}},

    [addItem.type]: (store, {payload}) =>   {return {...store, items: [...store.items, payload]}},
    [removeItems.type]: (store, {payload}) => {return {...store, items: [...store.items.filter(contact => contact.name !== payload)]}},
        
});

export default itemsReducer;