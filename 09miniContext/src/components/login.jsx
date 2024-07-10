// export default function Login(props) {
//     function handleChange(e){
//         const {name,value} = e.target;
//         props.setUser(prevUser => (
//             { 
//                 ...prevUser,
//                 [name]:value
//             }
//         ))
//     }

//     function handleSubmit(e){
//         e.preventDefault();
//        props.setUsername(props.user.username)
//     }

//     return (
//         <div className="login">
//             <h2>Login</h2>
//             <input 
//                 type="text" 
//                 name="username"
//                 value={props.user.username}
//                 onChange={handleChange}
//                 placeholder="Username" 
//             /><br/>
//             <input 
//                 type="text" 
//                 name="password"
//                 value={props.user.password}
//                 onChange={handleChange}
//                 placeholder="password" 
//             /><br/>
//             <button onClick={handleSubmit}>Login</button>
//         </div>
//     )
// }


/* */
// export default function Login(props) {
//     function handleSubmit(e){
//         e.preventDefault();
//        props.setUser({username:props.username,password:props.password})
//     }

//     return (
//         <div className="login">
//             <h2>Login</h2>
//             <input 
//                 type="text" 
//                 name="username"
//                 value={props.username}
//                 onChange={(e)=>props.setUsername(e.target.value)}
//                 placeholder="Username" 
//             /><br/>
//             <input 
//                 type="text" 
//                 name="password"
//                 value={props.password}
//                 onChange={(e)=> props.setPassword(e.target.value)}
//                 placeholder="password" 
//             /><br/>
//             <button onClick={handleSubmit}>Login</button>
//         </div>
//     )
// }

/* */
import { useContext,useState } from "react";
import UserContext from "../context/userContext";

export default function Login() {
    
    //we are maintining the local state to keep updating the values all along but then onSubmitting we want to fill the user object so that all those pages (components) reliaing on the user info would not be able to print anything along the way but after submission 
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    //recieving the data from context 
    const {setUser} = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault();
       setUser({username,password})
    }

    return (
        <div className="login">
            <h2>Login</h2>
            <input 
                type="text" 
                name="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="Username" 
            /><br/>
            <input 
                type="text" 
                name="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="password" 
            /><br/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}