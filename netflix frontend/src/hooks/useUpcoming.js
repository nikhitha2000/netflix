import { options } from "../../constants";
import { useDispatch } from "react-redux";
import {  addUpcomingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";
const useUpcoming = ()=>{
const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      options
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);

}
export default useUpcoming;