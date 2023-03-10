import { createSlice } from '@reduxjs/toolkit';

import { getAllFoods, getFoodsByCategory } from '../../../api/api_handler';

const initialState ={
    loading: true,
    error: null,
    foods: []
}

const FoodSlice = createSlice(
    {
        name: "Foods",
        initialState,
        reducers: {
            fetchAllFoods: async state => {
                const response = await getAllFoods()
                state = {...state}
                state["foods"] = response.data
                console.log(state, "foodsssss")
            },
            fetchAllFoodsByCategory: async (state,action) => {
                const response = await getFoodsByCategory(action.payload);
                console.log(response, "response")
                state.foods = JSON.stringify(response)
            }
        }

    }
)

export const {fetchAllFoods,fetchAllFoodsByCategory} = FoodSlice.actions;

export default FoodSlice.reducer;