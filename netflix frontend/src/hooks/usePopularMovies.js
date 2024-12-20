import { options } from "../../constants";
import { useDispatch } from "react-redux";
import {  addPopularMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
const usePopularMovies = ()=>{
const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const json = await data.json();
    console.log("popularmovies:",json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);

}
export default usePopularMovies;