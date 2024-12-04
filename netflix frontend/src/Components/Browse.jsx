import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcoming from '../hooks/useUpcoming';
import useTopRated from '../hooks/useTopRated';
function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcoming();
  useTopRated();
  return (
    <div>
    <MainContainer />
    <SecondaryContainer />
    </div>
  )
}


export default Browse;
