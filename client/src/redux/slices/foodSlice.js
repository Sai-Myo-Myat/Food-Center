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
                await getAllFoods()
                .then(response => {
                    console.log("response data", response.data)
                    state = {...state,foods: response.data}
                    console.log(state.loading, "bolean")
                    console.log("state.foods", state.foods)
                })
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

export const allFoods = (state) => state.foods.foods

export default FoodSlice.reducer;