import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthLayout({children,authentication=true}) {
    const navigate = useNavigate()
    const [loading,setLoading] = useState(true);
    const isLogged = useSelector(state=> state.loggedIn)
    
    useEffect(()=>{
        // if(isLogged) 
        // {
        //     navigate("/")
        // }
        // else 
        // {
        //     navigate("/login")
        // }

        if(authentication && isLogged !== authentication){
            navigate("/login")
        } 
        // else if(!authentication && isLogged !== authentication){
        //     navigate("/")
        // }
        
        setLoading(false)

    }, [navigate,isLogged,authentication])

    return (
        loading ? <h1>loading...</h1> : children
    )
    
}

export default AuthLayout;