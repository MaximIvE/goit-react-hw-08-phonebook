import { createSlice } from "@reduxjs/toolkit";
import store from "redux/store";

const initialStore = {
        items: [],
        loading: false,
        error: null,
    
};

const itemsSlice = createSlice({
    name: "items",
    initialState: initialStore,
    reducers: {
        addItem: (store, {payload}) => [...store, payload],
        
        removeItem: (store, {payload}) => store.filter(contact => contact.name !== payload),

        fetchItemsLoading: (store, {payload}) => {return {...store, loading: payload.loading}},
        fetchItemsSuccess: (store, {payload}) => {return {...store, loading: payload.loading, items: payload.items}},
        fetchItemsError: (store, {payload}) => {return {...store, error: payload.error}},
    }
});

export const {addItem, removeItem} = itemsSlice.actions;

export default itemsSlice.reducer;

