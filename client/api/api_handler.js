import {axiosInstant}  from '../utils/axios/instant';

export const getAllFoods = async () => await axiosInstant.get('/foods');


export const getOneFood = async (id) => await axiosInstant.get(`/foods/${id}`);
