import { configureStore } from '@reduxjs/toolkit'
import Creducer from "./slice"
import movieReducer from "./movieSlice"
import searchRed from "./searchSlice"
const appStore = configureStore({
    reducer:{
        user:Creducer,
        movie:movieReducer,
        search:searchRed
    },
})

export default appStore