import { configureStore } from "@reduxjs/toolkit";
import foodReducer  from './slices/foodSlice'

const store = configureStore({
    reducer: {
        foods: foodReducer,
    }
})

export default store;