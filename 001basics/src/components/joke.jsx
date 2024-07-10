export default function Joke(props) {
    console.log(props)
    return (
        <div>
            {props.title && <h1>{props.title}</h1>}  {/*conditional rendering in react*/}
            <p>{props.joke}</p>
        </div>
    )
}



const cond1 = true
const cond2 = false
if(cond1 && console.log("Hello there")) {
    //it will just simply run the seoncd piece of code is first statement is truthy else completely skip the second statement
}

if(cond1 && cond2)
{
    //this code will NOT run
}