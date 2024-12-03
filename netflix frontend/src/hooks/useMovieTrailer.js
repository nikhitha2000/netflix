import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { options } from '../../constants'
import { addTrailer } from '../../utils/moviesSlice';
const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const getMovieVideos = async ()=>{
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            options
          );
        const json = await data.json();
        const filterData = json.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length ?filterData[1] : json.results[0];
        dispatch(addTrailer(trailer));
    }
    useEffect(()=>{
        getMovieVideos();
    },[]);
}
export default useMovieTrailer;