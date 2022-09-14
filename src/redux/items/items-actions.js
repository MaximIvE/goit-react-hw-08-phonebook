import { createAction } from "@reduxjs/toolkit";

export const fetchItemsLoading = createAction("item/fetch/loading");
export const fetchItemsSuccess = createAction("item/fetch/success");
export const fetchItemsError = createAction("item/fetch/error");


export const addItem = createAction("item/add");
export const removeItems = createAction("item/remove");