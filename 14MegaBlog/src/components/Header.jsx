import React from 'react';
import { useSelector } from 'react-redux';
import {Logo,LogoutBtn} from "./index"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Container} from './index';

function Header() {
  const isLogged = useSelector(state => (state.loggedIn))

  const navigate = useNavigate();    // will be used to direct to some url on clicking or something could also use link tag instead for sure 

  //make objects array 
  const navItems = [
    {
      name: "Home",
      url: "/",
      shouldShow: true
    },
    {
      name: "Login",
      url: "/login",
      shouldShow: !isLogged,     //if already logged in then why to show this 
    },
    {
      name: "Signup",
      url: "/signup",
      shouldShow: !isLogged,    //because we auto login the user when signed up so dont show this too
    },
    {
      name: "All Posts",
      url: "/all-posts",
      shouldShow: isLogged,  
    },
    {
      name: "Add Post",
      url: "/add-post",
      shouldShow: isLogged, 
    }
  ]

  //make elements array
  const navItemsElements = navItems.map(item => (
    item.shouldShow ? (
    <li key={item.name}>
      <button                                            //could wrap in <Link> tag also then use 'to' attribute
        onClick={()=>navigate(item.url)}
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      >
        {item.name} 
      </button>
    </li>
    ) : null
  ))

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>

          <div className='mr-4'>
            <Link to="/">
              <Logo width="100px"/>
            </Link>
          </div>

          <ul  className='flex ml-auto'>
            {navItemsElements}

            {       
              isLogged && <li> <LogoutBtn /> </li>
            }
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header


//why rendered logout individually not in that array
//* because logout pe hmme kisi page pe redirect nhi krna hota so no need to use navigate 
//* we have to run auth service funcs to delete the sessions from the db 
//* we have to update the state in the store too 
//* but on login and signup we have to redirect it to some pages to get the details 
