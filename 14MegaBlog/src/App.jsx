import { useEffect, useState } from 'react'
import './App.css'
import authService from "./appwriteServices/authService"
import {Header,Footer} from './components/index'
import { useDispatch } from 'react-redux';
import { login } from './store/authSlice';
import { Outlet } from 'react-router-dom';

function App() {

  //we want to check if the current user is logged in or not (if we find its data then he/she is logged in else either they are new or logged out so lets just set to be logged out so at least the state would not be default in store)
  const [loading,setLoading] = useState(true);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      userData ? dispatch(login(userData)) : dispatch(logout())
    })
    .finally(()=>setLoading(false))
  }, [])

  return loading ? null : (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App