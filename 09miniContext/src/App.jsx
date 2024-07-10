// import './App.css'
// import Profile from './components/profile'
// import Login from './components/login'
// import { useState } from 'react'

// function App() {

//   const [user,setUser] = useState({
//     username:'',
//     password:''
//   })

//   const [username,setUsername] = useState("")

//   return (
//     <>
//       <Login user={user} setUser={setUser} setUsername={setUsername}/>
//       <Profile username={username}/>
//     </>
//   )
// }

// export default App


// import './App.css'
// import Profile from './components/profile'
// import Login from './components/login'
// import { useState } from 'react'

// function App() {

//   const [user,setUser] = useState({
//     username:'',
//     password:''
//   })

//   const [username,setUsername] = useState("")
//   const [password,setPassword] = useState("")

//   return (
//     <>
//       <Login 
//         user={user} 
//         setUser={setUser} 
//         username={username}
//         setUsername={setUsername}
//         password={password}
//         setPassword={setPassword}/>
//       <Profile user={user} />
//     </>
//   )
// }

// export default App


//if not using a separate provider file (component)
// import './App.css'
// import { useState } from 'react'
// import Profile from './components/profile'
// import Login from './components/login'
// import UserContextProvider from './context/userContextProvider'
// import UserContext from './context/userContext'

// function App() {

//   const [user,setUser] = useState({
//     username:'',
//     password:''
//   })

//   return (
//     <UserContext.Provider value={{user,setUser}}>
//       <Login />
//       <Profile />
//     </UserContext.Provider>
//   )
// }

// export default App


//if using a separate provider file (component)
import './App.css'
import Profile from './components/profile'
import Login from './components/login'
import UserContextProvider from './context/userContextProvider'

function App() {

  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App