import React from 'react'

export default function ListItem({list, onClick}) {
    return (
        <>
            <div className='flex justify-center items-center m-2 font-bold text-2xl'>
                <p className='mr-2'>No. {list.id}</p>
                <p className='mr-2'>{list.name}</p>
                <button 
                className='border-2 border-blue-500'
                onClick={()=>{onClick(list.name)}}>클릭</button>
            </div>
        </>
        
    )
}
