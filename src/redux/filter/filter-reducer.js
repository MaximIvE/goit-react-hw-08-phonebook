import { SET_FILTER } from "./filter-types";

const initialStore = "";

const filterReducer = (store = initialStore, action) => {
 const { type, payload} = action;
 switch(type){
       
    case SET_FILTER:
        return payload;

    default:
        return store;
 }
};

export default filterReducer;