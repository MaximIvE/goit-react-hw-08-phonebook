import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import itemsSlice from "./items/items-slice";
import filterSlice from "./filter/filter-slice";
import { persistStore, persistReducer, PERSIST} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  items: itemsSlice,
  filter: filterSlice,
});

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      }}),
});

export const persistor = persistStore(store);
export default store;