import React from 'react'
import PopularMovies from './PopularMovies';

const SecondCotainer = () => {
  let arr=["now_playing","popular","top_rated","upcoming"]
  return (
  <div className=''>
    <div className='mt-[-1%]'>
      <PopularMovies category={arr[0]}/>
      <PopularMovies category={arr[1]}/>
      <PopularMovies category={arr[2]}/>
      <PopularMovies category={arr[3]}/>
      </div>
    </div>
  )
}

export default SecondCotainer