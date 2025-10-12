import axiosInstance from './index.js';

export async function getProducts(){
    const products = await axiosInstance.get('/products');
    return products;
}