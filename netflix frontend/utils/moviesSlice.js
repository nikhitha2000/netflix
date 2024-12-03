import { createSlice } from "@reduxjs/toolkit"
import reducer from "./userSlice";

const moviesSlice = createSlice({
name:"movies",
initialState :{
    nowPlayingMovies:null,
    trailer:null,
},
reducers:{
    addNowPlayingMovies:(state ,action)=>{
        state.nowPlayingMovies = action.payload;
    },
    addTrailer :(state ,action)=>{
        state.trailer = action.payload;
    },
}
})
export default moviesSlice.reducer;
export const {addNowPlayingMovies,addTrailer} = moviesSlice.actions;