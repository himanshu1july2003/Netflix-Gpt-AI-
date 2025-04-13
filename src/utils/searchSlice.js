import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search", 
    initialState:{
        searchState:false,
        language:"en"
       },
    reducers:{
        changeSearchState:(state)=>{
            state.searchState=!state.searchState
        },
        changeLanguage:(state,action)=>{
            state.language=action.payload;
        }
    }
})
export const {changeSearchState,changeLanguage}=searchSlice.actions;
export default searchSlice.reducer