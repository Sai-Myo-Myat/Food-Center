import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist"
import {composeWithDevTools} from 'redux-devtools-extension'


import foodReducer  from './slices/foodSlice'
import thunk from "redux-thunk";

const middleware = [thunk]

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    foods: foodReducer,
})

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: middleware
})

export const persistor = persistStore(store)