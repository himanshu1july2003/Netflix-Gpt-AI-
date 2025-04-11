import React from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { Api_Url } from '../utils/Contants'
import { useEffect } from 'react'
import FirstContainer from './FirstContainer';
const NowPlayingMovies = () => {
    const dispatch=useDispatch()

    const getNowPlayingMovies=async()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', Api_Url)
        const res = await data.json();
      dispatch(addNowPlayingMovies(res?.results))
      const{title,overview}=res?.results;
      }
      useEffect(()=>{
        getNowPlayingMovies();
      },[])
  return (
    <div>
       
    </div>
  )
}

export default NowPlayingMovies