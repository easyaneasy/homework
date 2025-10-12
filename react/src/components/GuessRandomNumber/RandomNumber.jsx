import React from 'react'

export default function RandomNumber({randomNumber, isCorrect}) {
  return (
    <div className='mt-2 mb-4'>
        {isCorrect ? (
            <p className='font-bold text-4xl'>{randomNumber}</p>
            ) : (
            <p className='text-blue-500 font-bold text-4xl'>???</p>
        )}    
    </div>
  )
}
