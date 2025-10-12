import axiosInstance from './index.js';

export async function getCarts(){
    const carts = await axiosInstance.get('/carts');
    return carts;
}