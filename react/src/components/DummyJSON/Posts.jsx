import {useState, useEffect} from 'react';
import {getPosts} from '../../api/posts'

export default function Posts() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const responseData = await getPosts();
            const postData = responseData.posts;
            // console.log(postData);
            setPosts(postData);
        }
        fetchData();
    }, []);

  return (
    <div className='flex justify-center w-screen'>
        <div className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold mb-2'>Post list</h1>
        <ul>
            {posts.map(post => {
                return (
                    <li key={post.id} className='border-1 rounded-xl p-2 m-2'>
                        <p>Post ID : {post.id}</p>
                        <p>Title : {post.title}</p>
                        <p>UserId : {post.userId}</p>
                        <span>Tags : </span>
                        {post.tags.map((tag, index) => {
                            return <span key={index}>#{tag} </span>
                        })}
                    </li>
                )
            })}
        </ul>
        </div>
    </div>
  )
}
