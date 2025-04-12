import React, { useEffect, useState } from 'react'
import { Api_Url } from '../utils/Contants';

const usePopularMovie = (category) => {
  const [ress,setRes]=useState(null)
    const func= async()=>{
   const data= await fetch(`https://api.themoviedb.org/3/movie/${category}`, Api_Url)
   const res= await data.json();
   console.log("ooohoo",res)
   setRes(res)
   return (res);
    }
    useEffect(()=>{
        func()
    },[])
    return ress
 
}

export default usePopularMovie