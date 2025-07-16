import React from 'react'
import { summerImg } from '../Data'

const Cards = ({text}) => {
  return (
    <div className='w-full my-5 '>
      <div className=' flex justify-center  '>
        <h1 className='uppercase  font-bold p-5'>{text}</h1>
      </div>
      <div className='grid grid-cols-2  md:grid-cols-4 gap-4'>
        {summerImg.map((img ,i)=>(
            <div id={i} className=''>
                <img src={img.src} alt="summer collection" />

            </div>

        ))}
      </div>
    </div>
  )
}

export default Cards
