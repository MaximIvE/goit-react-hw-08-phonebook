import { createSlice } from "@reduxjs/toolkit";

// Структура store: { contacts: {
//     items: [],
//     filter: "",
// }}

const filterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        addFilter: (_, {payload}) => payload,
    }
});

export const {addFilter} = filterSlice.actions;

export default filterSlice.reducer;