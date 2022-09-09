import { ADD_ITEM, ADD_FILTER, REMOVE_ITEM } from "./types";

const reducer = (store, action) => {
    const {items, filter} = store.contacts;
    const {type, payload} = action;
    switch(type){
        case ADD_ITEM :
            return {...store, contacts: {filter, items: [ ...items, payload]}};

        case REMOVE_ITEM :
            const newItems = items.filter(contact => contact.name !== payload);
            return {...store, contacts: {filter, items: newItems}};

        case ADD_FILTER :
            return {...store, contacts: {filter: payload, items}};

        default:
            return store;
    }
};

export default reducer;