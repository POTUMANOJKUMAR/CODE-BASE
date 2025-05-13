import { createSlice } from "@reduxjs/toolkit";
//  export const initialState={
//     loginData:[],
//     accessToken:null
// }
 export const kitchenSlice=createSlice({
    name:"kitchen",
    initialState:{   fridgeData:[],
        gasData:[],
        loginData:[],
        accessToken:null},
        
    reducers:{
        SetAccessToken:(state,action)=>{
            console.log(action,"token")
            state.accessToken=action.payload
        },
        SetLoginData:(state,action)=>{
            console.log(action,"action")
            state.loginData=action.payload
        },
        SetClearToken:(state,payload)=>{
            console.log("came",payload)
            state.accessToken=null
        },
        SetFridgeData:(state,action)=>{
            state.fridgeData=action.payload
        }
        
    }
})
export  const {SetAccessToken,SetLoginData,SetClearToken,SetFridgeData} = kitchenSlice.actions

