import { ADD_ITEM, ADD_FILTER } from "./types";

export const addItem = (payload) => {
    return {
        type: ADD_ITEM,
        payload,
    }
}

export const addFilter = (payload) => {
    return {
        type: ADD_FILTER,
        payload,
    }
}