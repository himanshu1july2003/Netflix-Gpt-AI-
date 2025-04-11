import { configureStore } from '@reduxjs/toolkit'
import Creducer from "./slice"
import movieReducer from "./movieSlice"

const appStore = configureStore({
    reducer:{
        user:Creducer,
        movie:movieReducer
    },
})

export default appStore