import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import itemsSlice from './items/items-slice';
import filterReducer from './filter/filter-reducer';
// import { persistStore, persistReducer, PERSIST} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
  contacts: itemsSlice,
  filter: filterReducer,
});

// const persistConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["contacts"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: {
        // ignoredActions: [PERSIST],
      }}),
});

// export const persistor = persistStore(store);
export default store;