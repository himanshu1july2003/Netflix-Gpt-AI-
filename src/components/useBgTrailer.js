import { useEffect } from 'react';
import { Api_Url } from '../utils/Contants';
import { useDispatch } from 'react-redux';
import { addBgTrailer } from '../utils/movieSlice';

const useBgTrailer = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const movieId = typeof id === 'object' ? id?.id?.toString() : id?.toString();
    if (!movieId) return;

    const getBgTrailer = async () => {
      const api = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
      console.log('Fetching from:', api);

      try {
        const data = await fetch(api, Api_Url);
        const json = await data.json();
        console.log('Trailer data:', json);

        const trailers = json?.results?.filter((t) => t?.type === 'Trailer');
        if (trailers?.length > 0) {
          dispatch(addBgTrailer(trailers[trailers.length - 1]));
        }
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    getBgTrailer();
  }, [id, dispatch]);
};

export default useBgTrailer;
