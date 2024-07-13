import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {         //we are doing all this so that by looking at this state we can decide what and what not to show if logged in or not
    loggedIn: false,           //so basically store is just to keep track of wheather the current user is logged in or not
    userData: null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login: (state,action) => {
            console.log(state.loggedIn)
            state.loggedIn = true;
            state.userData = action.payload;
        },
        logout: (state,action) => {
            console.log(state)
            state.loggedIn = false;
            state.userData = null;
        }
    }
})

export default authSlice.reducer;
export const {login, logout} = authSlice.actions;