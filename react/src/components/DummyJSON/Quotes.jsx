import {useState, useEffect} from 'react';
import {getQuotes} from '../../api/quotes'

export default function Quotes() {

    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const responseData = await getQuotes();
            const quotesData = responseData.quotes;
            // console.log(quotesData);
            setQuotes(quotesData);
        }
        fetchData();
    }, []);

  return (
    <div className='flex justify-center w-screen'>
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-bold mb-2'>Quotes list</h1>
            <ul>
                {quotes.map(quote => {
                    return (
                        <li key={quote.id} className='border-1 w-200 rounded-xl p-2 m-2'>
                            <p>Quote ID : {quote.id}</p>
                            <p>Author : {quote.author}</p>
                            <p>Quote : {quote.quote}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}
