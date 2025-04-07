import { configureStore } from '@reduxjs/toolkit'
import Creducer from "./slice"

const appStore = configureStore({
    reducer:{
        user:Creducer,
    },
})

export default appStore