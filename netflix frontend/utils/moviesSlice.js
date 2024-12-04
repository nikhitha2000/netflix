import { createSlice } from "@reduxjs/toolkit"
import reducer from "./userSlice";

const moviesSlice = createSlice({
name:"movies",
initialState :{
    nowPlayingMovies:null,
    trailer:null,
    nowPopularMovies:null,
    nowUpcomingMovies:null,
    nowTopRatedMovies:null,
},
reducers:{
    addNowPlayingMovies:(state ,action)=>{
        state.nowPlayingMovies = action.payload;
    },
    addTrailer :(state ,action)=>{
        state.trailer = action.payload;
    },
    addPopularMovies:(state ,action)=>{
        state.nowPopularMovies = action.payload;
    },
    addUpcomingMovies:(state ,action)=>{
        state.nowUpcomingMovies = action.payload;
    },
    addTopRatedMovies:(state ,action)=>{
        state.nowTopRatedMovies = action.payload;
    },
}
})
export default moviesSlice.reducer;
export const {addNowPlayingMovies,addTrailer,addPopularMovies,addUpcomingMovies,addTopRatedMovies} = moviesSlice.actions;