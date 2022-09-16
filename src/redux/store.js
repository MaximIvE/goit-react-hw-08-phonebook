import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import itemsSlice from './items/items-slice';
import filterReducer from './filter/filter-reducer';


const rootReducer = combineReducers({
  contacts: itemsSlice,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: {
        
      }}),
});

export default store;