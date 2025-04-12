
const MovieCard = (poster) => {
    let tit=poster;
  return (
        <div className='h-50 w-50 bg-black text-white'>
            <img className="h-full w-full" src={"https://image.tmdb.org/t/p/original/"+tit.poster}></img>
        </div>
  )
}

export default MovieCard