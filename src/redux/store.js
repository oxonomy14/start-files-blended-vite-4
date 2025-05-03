import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './todoSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfigTodos = {
  key: 'todos',
  version: 1,
  storage,
};

export const store = configureStore({
  reducer: {
    todoSlice: persistReducer(persistConfigTodos, todoReducer),
    filterSlice: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
