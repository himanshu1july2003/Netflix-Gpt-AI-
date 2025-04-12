import React from 'react'
import Header from './Header'
import NowPlayingMovies from './NowPlayingMovies'
import FirstContainer from './FirstContainer'
import SecondCotainer from './secondCotainer'

const Browse = () => {
NowPlayingMovies()
  return (
    <div className="">
      <Header/>
      <div className="relative">
      <section className="relative h-screen w-screen">
      <FirstContainer/>
      </section>
      </div>
      {/* <div className=' h-[100%]'>
      </div> */}
       <section className=" text-white min-h-screen bg-[#0e1111]">
      <SecondCotainer/>
      </section>
    </div>
  )
}

export default Browse