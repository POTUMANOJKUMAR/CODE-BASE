import { createSlice } from "@reduxjs/toolkit";

export const hallSlice=createSlice({
    name:"hall",
    initialState:{  
    hall:[]},
        
    reducers:{
        SetHall:(state,action)=>{
            console.log(action,"action")
            state.hall=action.payload
        },
       
        
    }
})
export  const {SetHall} = hallSlice.actions