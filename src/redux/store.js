import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import itemsSlice from './items/items-slice';
import filterSlice from './filter/filter-slice';
import authSlice from './auth/auth-slice';


const rootReducer = combineReducers({
  auth: authSlice,
  contacts: itemsSlice,
  filter: filterSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: {
        
      }}),
});

export default store;