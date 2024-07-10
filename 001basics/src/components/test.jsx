import { useState } from "react";

export default function Test(props){
    const [greeting,setGreeting] = useState(); 
    function greet(){
        const date = new Date();
        if(date.getHours() === 13)
        {
            setGreeting("afternoon") 
        }
        else
        {
            setGreeting("morning")
        }
    }
    //so basically state is used when after the app renders(according to the props) now on some event occuring we want to modify the content which needs to me reflected in the UI as well then we will need to change that using state not just some classic assigning 
    return(
        <div>
            <button onClick={greet}>click me </button>
            <h1>good {greeting} {props.name}</h1>
        </div>
    )
}