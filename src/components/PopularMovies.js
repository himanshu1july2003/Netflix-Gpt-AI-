import React from 'react';
import usePopularMovie from './usePopularMovie';
import MovieCard from './MovieCard';

const PopularMovies = ({category}) => {
  const data = usePopularMovie(category);
  console.log(category)
  let cat
  if(category==="now_playing")
    cat="Now Playing"
 else if(category==="popular")
    cat="Playing"
 else if(category==="top_rated")
    cat="Top Rated"
 else if(category==="upcoming")
    cat="Upcoming"
  return (
    <div className='px-4 '>
      <h1 className='text-2xl font-bold mb-4 text-white '>{cat} Movies</h1>
      
      <div className="">
        <div className="flex overflow-x-scroll gap-4">
          {data?.results.map((m) => (
            <div key={m.id} >
              <MovieCard poster={m?.poster_path} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
