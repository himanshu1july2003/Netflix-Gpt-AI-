import { createSlice } from "@reduxjs/toolkit";
import useBgTrailer from "../components/useBgTrailer";

const movieSlice=createSlice({
    name:"movie", 
    initialState:{nowPlayingMovies:null,
        BgTrailer:null,
        popularMovies:null

    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopluarMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addBgTrailer:(state,action)=>{
            state.BgTrailer=action.payload
        }
    }
})
export const {addNowPlayingMovies,addBgTrailer,addPopluarMovies}=movieSlice.actions;
export default movieSlice.reducer