import { configureStore } from "@reduxjs/toolkit"
import authReducerList from "./authSlice";

const store = configureStore({
    //reducer list 
    reducer: authReducerList
})

export default store;