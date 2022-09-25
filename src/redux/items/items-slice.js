import { createSlice } from "@reduxjs/toolkit";
import { fetchItems, addItem, removeItem } from "./items-operations";

const initialState = {
    items: [],
    loading: false,
    error: {},
};

const itemsSlice = createSlice({
    name: "items",
    initialState,
    extraReducers: {
        [fetchItems.pending]:   (store)                 =>  {return {...store, loading: true,   error: {},    }},
        [fetchItems.fulfilled]: (store, {payload})      =>  {return {...store, loading: false,  items: payload, }},
        [fetchItems.rejected]:  (store, {payload})      =>  {return {...store, loading: false,   error: payload, }},
        
        [addItem.pending]:      (store)                 =>  {return {...store, loading: true,   error: {},    }},
        [addItem.fulfilled]:    (store, {payload})      =>  {return {...store, loading: false,  items: [...store.items, payload], }},
        [addItem.rejected]:     (store, {payload})      =>  {return {...store, loading: false,   error: payload, }},

        [removeItem.pending]:      (store)              =>  {return {...store, loading: true,   error: {},    }},
        [removeItem.fulfilled]:    (store, {payload})   =>  {return {...store, loading: false,  items: store.items.filter(contact => contact.id !== payload), }},
        [removeItem.rejected]:     (store, {payload})   =>  {return {...store, loading: false,   error: payload, }},

    }
});

export default itemsSlice.reducer;