    import { combineReducers } from "@reduxjs/toolkit";
    import  { kitchenSlice}  from "./authSlice";
import { hallSlice } from "./hallSlice";

    export const rootReducer=combineReducers({
        kitchen:kitchenSlice.reducer,
        hall:hallSlice.reducer

    })
