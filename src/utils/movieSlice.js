import { createSlice } from "@reduxjs/toolkit";
import useBgTrailer from "../components/useBgTrailer";

const movieSlice=createSlice({
    name:"movie", 
    initialState:{nowPlayingMovies:null,
        BgTrailer:null

    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addBgTrailer:(state,action)=>{
            state.BgTrailer=action.payload
        }
    }
})
export const {addNowPlayingMovies,addBgTrailer}=movieSlice.actions;
export default movieSlice.reducer