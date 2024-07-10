import { useState } from "react"
import UserContext from "./userContext"

// this is like a component only but for different purpose
const UserContextProvider = ({children}) => {  //like props destructure (every props has a children property (if it has children) wihtout even passing)

    const [user,setUser] = useState({
        username:'',
        password:''
    })

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;