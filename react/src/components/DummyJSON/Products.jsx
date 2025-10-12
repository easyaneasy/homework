import {useState, useEffect} from 'react';
import {getProducts} from '../../api/products'

export default function Products() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const responseData = await getProducts();
            const productData = responseData.products;
            // console.log(productData);
            setProducts(productData);
        }
        fetchData();
    }, []);

  return (
    <div className='flex justify-center w-screen'>
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-bold mb-2'>Products list</h1>
            <ul>
                {products.map(product => {
                    return (
                        <li key={product.id} className='border-1 rounded-xl p-2 m-2'>
                            <p>Product ID : {product.id}</p>
                            <p>Product Title : {product.title}</p>
                            <p>Category : {product.category}</p>
                            <span>Reviews</span>
                            {product.reviews.map((review, index) => {
                                return <p key={index}>- {review.comment}</p>
                            })}
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}
