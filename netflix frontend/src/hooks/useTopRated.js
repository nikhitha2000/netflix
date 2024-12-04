import { options } from "../../constants";
import { useDispatch } from "react-redux";
import {  addTopRatedMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
const useTopRated = ()=>{
const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);

}
export default useTopRated;