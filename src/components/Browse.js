import React from 'react'
import Header from './Header'
import NowPlayingMovies from './NowPlayingMovies'
import FirstContainer from './FirstContainer'
import SecondCotainer from './secondCotainer'
import { useSelector } from 'react-redux'
import SearchPage from './SearchPage'

const Browse = () => {
  const changepage=useSelector(store=>store.search.searchState)

NowPlayingMovies()
  return (
    <div className="">
      
      {changepage?<div>
        <div className="bg-black ">
        <Header />
        </div>
      <SearchPage />
      </div>: <div>
      <Header/>
      <div className="relative">
      <section className="relative h-screen w-screen">
      <FirstContainer/>
      </section>
      </div>
       <section className=" text-white min-h-screen bg-[#0e1111]">
      <SecondCotainer/>
      </section>
      </div>}
    </div>
  )
}

export default Browse