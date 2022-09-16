import { createReducer, combineReducers } from "@reduxjs/toolkit";
// import { addItem, removeItems, fetchItemsLoading, fetchItemsSuccess, fetchItemsError } from "./items-actions";
import actions from "./items-actions";

// const initialState = {
//     items: [],
//     loading: false,
//     error: null,
// };


const itemsReducer = createReducer([], {
    [actions.fetchItemsSuccess]: (_, {payload}) => payload,
    [actions.addItemsSuccess]: (store, {payload}) => [...store, payload],
    [actions.removeItemsSuccess]: (store, {payload}) => store.filter(({id}) => id !== payload),
});


const loadingReducer = createReducer(false, {
    [actions.fetchItemsLoading]: () => true,
    [actions.fetchItemsSuccess]: () => false,
    [actions.fetchItemsError]: () => false,

    [actions.addItemsLoading]: () => true,
    [actions.addItemsSuccess]: () => false,
    [actions.addItemsError]: () => false,

    [actions.removeItemsLoading]: () => true,
    [actions.removeItemsSuccess]: () => false,
    [actions.removeItemsError]: () => false,
});


const errorReducer = createReducer(null, {
    [actions.fetchItemsLoading]: () => null,
    [actions.fetchItemsError]: (_, {payload}) => payload,

    [actions.addItemsLoading]: () => null,
    [actions.addItemsError]: (_, {payload}) => payload,
    
    [actions.removeItemsError]: (_, {payload}) => payload,
    [actions.removeItemsLoading]: () => null,
});



// const itemsReducer = createReducer(initialState, {
//     //Отримання всіх items з api в store
//     [actions.fetchItemsLoading]: (store) => {return {...store, loading: true, error: null}},
//     [actions.fetchItemsSuccess]: (store, {payload}) => {return {...store, 
//         items: payload, loading: false}},
//     [actions.fetchItemsError]: (store, {payload}) => {return {...store, error: payload, loading: false}},

//     //Додавання одного item до store
//     [actions.addItemsLoading]: (store) => {return {...store, loading: true, error: null}},
//     [actions.addItemsSuccess]: (store, {payload}) => {return {...store, items: [...store.items, payload], loading: false}},
//     [actions.addItemsError]: (store, {payload}) => {return {...store, error: payload, loading: false}},
    
//     //Видалення одного item з store
//     [actions.removeItemsLoading]: (store) => {return {...store, loading: true, error: null}},
//     [actions.removeItemsSuccess]: (store, {payload}) => {return {...store, loading: false, items: store.items.filter(({id}) => id !== payload), }},
//     [actions.removeItemsError]: (store, {payload}) => {return {...store, error: payload, loading: false}},


//     // [actions.addItem.type]: (store, {payload}) =>   {return {...store, items: [...store.items, payload]}},
//     // [actions.removeItems.type]: (store, {payload}) => {return {...store, items: [...store.items.filter(contact => contact.name !== payload)]}},
        
// });

const contactsReducer = combineReducers({
    items: itemsReducer,
    loading: loadingReducer,
    error: errorReducer,
})

export default contactsReducer;