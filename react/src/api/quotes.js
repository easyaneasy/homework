import axiosInstance from './index.js';

export async function getQuotes(){
    const quotes = await axiosInstance.get('/quotes');
    return quotes;
}