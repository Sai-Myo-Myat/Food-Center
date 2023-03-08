import {axiosInstant}  from '../utils/axios/instant';

export const getAllFoods = async () => await axiosInstant
    .get('/foods')
    .then(response => response)


export const getOneFood = async (id) => {
    await axiosInstant
        .get(`/foods/${id}`)
        .then(response => response)
}

export const getFoodsByCategory = async (category) => {
    await axiosInstant.get('/foods/',{
        data: {
            category: category
        }
    })
    .then(response => response)
}