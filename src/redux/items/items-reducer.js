import { ADD_ITEM, REMOVE_ITEM} from "./items-types";

const initialState = [];

const itemsReducer = (store = initialState, action) => {
    const {type, payload} = action;
    switch (type){
        case ADD_ITEM:
            return [...store, payload];

        case REMOVE_ITEM:
            return store.filter(contact => contact.name !== payload);
        
        default: 
            return store;

    }
};

export default itemsReducer;