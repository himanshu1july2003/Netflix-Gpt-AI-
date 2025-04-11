import React from 'react'
import TitleTrailer from './titleTrailer'
import TrailerVideo from './trailerVideo'
import { useSelector } from 'react-redux'

const FirstContainer = () => {
    const movies= useSelector((store)=>store?.movie?.nowPlayingMovies)
    if(!movies) return

    const mainmovie=movies[1]
    console.log(mainmovie)
const{ original_title,overview,id}=mainmovie
  return (
    <div className=' w-screen'>
         <TitleTrailer title={original_title} overview={overview} />
         <TrailerVideo id={id}/>
    </div>
  )
}

export default FirstContainer