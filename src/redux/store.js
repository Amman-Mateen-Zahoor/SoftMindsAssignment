import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import AsyncStorage from  "@react-native-async-storage/async-storage"
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig={
  key: "todo",
  storage:AsyncStorage 
}
const rootReducer =combineReducers({
 todo:todoReducer
})
const persistedReducer =persistReducer(persistConfig,rootReducer)
export const store = configureStore({
    reducer:  persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore actions from redux-persist
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
  });
     
