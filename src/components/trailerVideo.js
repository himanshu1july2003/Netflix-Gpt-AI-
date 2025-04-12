import React from 'react';
import useBgTrailer from './useBgTrailer';
import { useSelector } from 'react-redux';

const TrailerVideo = ({ id }) => {
  useBgTrailer(id);

  const trailer = useSelector((store) => store?.movie?.BgTrailer);
  const videoKey = trailer?.key;

  if (!videoKey) return null;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden z-[-1]">
      <iframe
        className="w-[130vw] h-[130vh] absolute top-[-17%] left-[-14%] pointer-events-none"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&loop=1&playlist=${videoKey}&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1`}
        allow="autoplay"
      />
    </div>
  );
};

export default TrailerVideo;
