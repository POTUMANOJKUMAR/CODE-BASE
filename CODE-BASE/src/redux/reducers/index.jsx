import { combineReducers } from "@reduxjs/toolkit";
import { kitchenSlice } from "./authSlice";
import { hallSlice } from "./hallSlice";
import { tabSlice } from "./tabSlice";

export const rootReducer = combineReducers({
    kitchen: kitchenSlice.reducer,
    hall: hallSlice.reducer,
    tabs:tabSlice.reducer
})
