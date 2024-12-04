import React from 'react'
import { IMG_CDN } from '../../utils/Constants'
function MovieCard({posterPath}) {
  return (
    <div className='w-48 pr-4'>
       <img alt='poster' src={IMG_CDN + posterPath}></img> 
    </div>
  )
}

export default MovieCard