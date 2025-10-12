import axiosInstance from './index.js';

export async function getPosts(){
    const posts = await axiosInstance.get('/posts');
    return posts;
}