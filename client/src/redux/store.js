import { configureStore, combineReducers, createAsyncThunk } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist"
import thunk from "redux-thunk";

import foodReducer  from './slices/foodSlice'


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
    middleware: [thunk]
})

export const persistor = persistStore(store)