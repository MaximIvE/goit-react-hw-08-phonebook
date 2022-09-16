import { createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "./items-operations";

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const itemsSlice = createSlice({
    name: "items",
    initialState,
    extraReducers: {
        [fetchItems.pending]:   (store) =>              {return {...store, loading: true,   error: null,    }},
        [fetchItems.fulfilled]: (store, {payload}) =>   {return {...store, loading: false,  items: payload, }},
        [fetchItems.rejected]:  (store, {payload}) =>   {return {...store, loading: true,   error: payload, }},
    }
});

export default itemsSlice.reducer;