import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer';
import  contactsSlice  from "./slice"; 

const store = configureStore({
  reducer: contactsSlice,
});

store.subscribe(()=>{
    localStorage["contacts"] = JSON.stringify(store.getState().contacts.items)
});

export default store;