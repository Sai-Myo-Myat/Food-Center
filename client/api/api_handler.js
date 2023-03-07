import {axiosInstant}  from '../utils/axios/instant';

export const getAllFoods = async () => await axiosInstant.get('/foods');   
