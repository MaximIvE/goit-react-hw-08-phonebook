import { createAction } from "@reduxjs/toolkit";

const fetchItemsLoading = createAction("item/fetch/loading");
const fetchItemsSuccess = createAction("item/fetch/success");
const fetchItemsError = createAction("item/fetch/error");

const addItemsLoading = createAction("item/add/loading");
const addItemsSuccess = createAction("item/add/success");
const addItemsError = createAction("item/add/error");


const addItem = createAction("item/add");
const removeItems = createAction("item/remove");

const actions = {
    fetchItemsLoading,
    fetchItemsSuccess,
    fetchItemsError,
    
    addItemsLoading,
    addItemsSuccess,
    addItemsError,
    addItem,
    removeItems
};

export default actions;