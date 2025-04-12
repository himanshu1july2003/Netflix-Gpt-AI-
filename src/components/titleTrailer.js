import React from 'react'
import { PlayIcon,info } from '../utils/Contants'
const TitleTrailer = ({ title, overview }) => {
    return (
        <div className='absolute z-10 pt-[16%]' >
      <div className='text-white w-4/12 px-5'>
         <h1 className='font-bold text-5xl'>{title}</h1> 
         <h3 className='text-[15px]'>{overview}</h3> 
      </div>
      <div className='flex w-12/12 items-center gap-4 p-4 text-white'>
        <button className='cursor-pointer p-3 px-8 text-black bg-white items-center flex rounded-md font-extrabold'>
            {PlayIcon} Play 
        </button>
        <button className='cursor-pointer p-3 px-8 bg-gray-500 text-white items-center flex rounded-md gap-1 font-bold'>
             {info} More Info
        </button>
      </div>
      </div>
    )
  }
  

export default TitleTrailer