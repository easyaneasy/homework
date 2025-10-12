import {useState, useEffect} from 'react';
import {getCarts} from '../../api/carts'

export default function Carts() {

    const [carts, setCarts] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const responseData = await getCarts();
            const cartData = responseData.carts;
            // console.log(cartData);
            setCarts(cartData);
        }
        fetchData();
    }, []);

  return (
    <div className='flex justify-center w-screen'>
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-bold mb-2'>Carts list</h1>
            <ul>
                {carts.map(cart => {
                    return (
                        <li key={cart.id} className='border-1 rounded-xl p-2 m-2'>
                            <p>Cart ID : {cart.id}</p>
                            <p>TotalProducts : {cart.totalProducts}</p>
                            <p>Total : {cart.total}</p>
                            <p>Products</p>
                            <ul>
                                {cart.products.map(product => (
                                    <li key={product.id}>
                                        - {product.title}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}
