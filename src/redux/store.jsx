import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["authSlice"],
    blacklist: []
}
export const persistereducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistereducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})
 export const persistestore=persistStore(store)
