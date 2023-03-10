import { createSelector } from '@reduxjs/toolkit'

const allFoods = (state) => state.foods.foods

export const selectAllFoods = createSelector(allFoods,data => data)

