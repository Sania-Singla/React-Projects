import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from "../store/authSlice"
import authService from '../appwriteServices/authService'

function LogoutBtn() {

    const dispatch = useDispatch()

    async function logoutHandler() {
        await authService.logout();   //can use .then syntax also 
        dispatch(logout());
    }

    return (
        <div>
            <button
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                onClick={logoutHandler}
            >LogOut</button>
        </div>
    )
}

export default LogoutBtn