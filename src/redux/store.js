import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import itemsSlice from './items/items-slice';
import filterSlice from './filter/filter-slice';
import authSlice from './auth/auth-slice';

const rootReducer = combineReducers({
  auth: authSlice,
  contacts: itemsSlice,
  filter: filterSlice,
});

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["auth"],
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