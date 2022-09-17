import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import itemsSlice from './items/items-slice';
import filterSlice from './filter/filter-slice';


const rootReducer = combineReducers({
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