import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Home from "./components/Home/home"
import About from "./components/About/about.jsx"
import Contact from "./components/Contact/contact.jsx"
import User from "./components/User/user.jsx"
import Github, { githubInfo } from './components/Github/github.jsx'

/*
const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"",   //like after /.....
        element:<Home />   
      },
      {
        path:"about",       //slash toh already hai hi in the mai root path jiske andr ye sb nesting ho rhi hai 
        element:<About />
      },
      {
        path:"contact",
        element:<Contact />
      }
    ]
  }
])
*/

//ANOTHER EASY WAY (MORE REDABLE)
//nesting toh abhi bhi hogi hi 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} /> 
      <Route path='about' element={<About />} /> 
      <Route path='contact' element={<Contact />} /> 
      <Route path='user/:userId' element={<User />} /> 
      <Route 
        loader={githubInfo}
        path='github' 
        element={<Github />} /> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
