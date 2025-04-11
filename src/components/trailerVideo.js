// TrailerVideo.js
import React from 'react';
import useBgTrailer from './useBgTrailer';
import { useSelector } from 'react-redux';

const TrailerVideo = ({ id }) => {
  // Fetch trailer video using movie ID
  useBgTrailer(id);

  // Get trailer info from Redux store
  const trailer = useSelector((store) => store?.movie?.BgTrailer);

  // YouTube video key (from TMDB)
  const videoKey = trailer?.key;

  if (!videoKey) return null; // or show a loader

  return (
    <div>
      <iframe
        className="h-screen w-screen pointer-events-none"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&loop=1&playlist=${videoKey}&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1`}
        title="Background Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrailerVideo;
