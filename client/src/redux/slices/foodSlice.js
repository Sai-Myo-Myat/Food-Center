import { createSlice } from '@reduxjs/toolkit';

import { getAllFoods, getFoodsByCategory } from '../../../api/api_handler';

const FoodSlice = createSlice(
    {
        name: "Foods",
        initialState: {
            loading: true,
            error: null,
            foods: []
        },
        reducers: {
            fetchAllFoods: async state => {
                await getAllFoods()
                .then(response => {
                    state.foods = response.data
                })
            },
            fetchAllFoodsByCategory: async (state,category) => {
                const response = await getFoodsByCategory(category);
                console.log(response, "response")
                state.foods = JSON.stringify(response)
            }
        }

    }
)

export const {fetchAllFoods,fetchAllFoodsByCategory} = FoodSlice.actions;

export default FoodSlice.reducer;