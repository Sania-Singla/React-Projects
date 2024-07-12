import { configureStore } from "@reduxjs/toolkit"
import todosliceReducers from "../features/todo/todoSlice"

const store = configureStore({
    reducer: todosliceReducers     //we give all reducers here
})

export default store;