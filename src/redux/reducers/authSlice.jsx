import { createSlice } from "@reduxjs/toolkit";
//  export const initialState={
//     loginData:[],
//     accessToken:null
// }
 export const authSlice=createSlice({
    name:"authSlice",
    initialState:{   loginData:[],
        accessToken:null},
    reducers:{
        SetAccessToken:(state,action)=>{
            console.log(action,"action")
            state.accessToken=action.payload
        },
        SetLoginData:(state,action)=>{
            console.log(action,"action")
            state.loginData=action.payload
        },
        SetClearToken:(state,payload)=>{
            console.log("came",payload)
            state.accessToken=null
        }
        
    }
})
export  const {SetAccessToken,SetLoginData,SetClearToken} = authSlice.actions