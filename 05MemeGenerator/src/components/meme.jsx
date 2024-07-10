import "../css/main.css"
// import memesData from "../db/memesData"   // no need now because we used api request now
import { useState,useEffect } from "react";

export default function Meme() {

    //state for meme & inputs 
    const [meme,setMeme] = useState({   //we should give a default value always even if give am empty value like for array[] object{} but you should give something so that prevValue can be accessed for the first reload  
        topText:"",
        bottomText:"",
        image:""
    });    

    const[allMemes,setAllMemes] = useState([]);   //just always declare the data we might be getting from db as states becuase we could be using that in the UI

    //the use effect hook for api request 
    useEffect( ()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[]) //only run it once in the beggining the App renders

    //handleClick event handler
    function handleSubmit (e) {
        e.preventDefault();
        const memesArray = allMemes//.data.memes;
        const index = Math.floor( Math.random() * memesArray.length )   //0-100(99)
        // image = memesArray[index].url;  if using this then: setImage(image) & we will need to declare the state as let because we are explicitly varying the variable value not at the time of passing
        setMeme(prevImage => ({   //implicit return
            ...prevImage,
            image:memesArray[index].url
        }))
    }

    //method for input change
    function handleChange(e){
        const {name, value} = e.target;
            setMeme( prevMeme => ({
                ...prevMeme,
                [name]: value
            }))
    }

    return (
        <main>
           <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <input 
                        type="text" 
                        name="topText"  // same as the property name in the state 
                        placeholder="Enter the top text" 
                        id="top-text" 
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        name="bottomText" 
                        placeholder="Enter the bottom text" 
                        id="bottom-text" 
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button>Get a new meme image 🖼️</button> 
            </form>

            {
                meme.image 
                && 
                <div className="meme">
                    <img src={meme.image} alt="meme" />
                    <h2 className="top-text">{meme.topText}</h2>
                    <h2 className="bottom-text">{meme.bottomText}</h2>  
                </div>
            }

        </main>
    )
}