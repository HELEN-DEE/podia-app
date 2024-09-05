import React from 'react';
import { GiRoundStar } from "react-icons/gi";

const star = [
  {Label: <GiRoundStar />},
  {Label: <GiRoundStar />},
  {Label: <GiRoundStar />},
  {Label: <GiRoundStar />},
  {Label: <GiRoundStar />}
]

const Star = () => {
  return (
    <div className='flex justify-center gap-4 py-3'>
    {star.map((item, index) => (
      <ul key={index}>
        <span className='text-yellow-500 text-2xl'>
          {item.Label}
        </span>
      </ul>
    ))}
  </div>
  )
}

export default Star
