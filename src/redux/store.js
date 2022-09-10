import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

const store = configureStore({reducer});

store.subscribe(()=>{
    localStorage["contacts"] = JSON.stringify(store.getState().contacts.items)
});

export default store;