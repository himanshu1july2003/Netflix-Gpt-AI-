import React from 'react'
import Header from './Header'
import NowPlayingMovies from './NowPlayingMovies'
import FirstContainer from './FirstContainer'

const Browse = () => {
NowPlayingMovies()
  return (
    <div className="">
      <Header/>
      <FirstContainer/>
    </div>
  )
}

export default Browse