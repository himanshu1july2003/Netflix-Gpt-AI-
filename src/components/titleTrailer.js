import React from 'react'
import { PlayIcon,info } from '../utils/Contants'
const TitleTrailer = ({ title, overview }) => {
    return (
        <div className='absolute pt-[15%]' >
      <div className='text-white w-4/12 px-6'>
         <h1 className='font-bold text-5xl'>{title}</h1> 
         <h3 className='text-[15px]'>{overview}</h3> 
      </div>
      <div className='flex w-12/12 items-center gap-4 p-4 text-white'>
        <button className='cursor-pointer p-3 px-7 bg-black items-center border-2 flex rounded-md font-bold'>
            {PlayIcon} Play 
        </button>
        <button className='cursor-pointer p-3 px-7 bg-gray-300 text-white items-center border-2 flex rounded-md gap-1 font-bold'>
             {info} More Info
        </button>
      </div>
      </div>
    )
  }
  

export default TitleTrailer