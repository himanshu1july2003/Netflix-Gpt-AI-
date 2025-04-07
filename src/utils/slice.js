import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
            return action.payload
        },
        removeUser:(state)=>{
            return null
        }
    }

})

export const{addUser,removeUser} =slice.actions
export default slice.reducer