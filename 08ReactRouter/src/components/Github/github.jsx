import { useEffect,useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Github() {

    // const [data,setData] = useState({})
    
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/singlasania7717")
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[])

    //more optiimized way becuase in this whenever we got to /github the outlet gets replaced by github element and so useeffect renders because kind a like a nrefresh to the github element 
    //so we were facing a lag when clicking on github to avoid that why not fetch imediately the cursor went to the github button even before clicking the fetch will be executed like on hovering 

    const data = useLoaderData()

    return (
        <div className="bg-gray-700 p-4 text-center text-white text-2xl">Github Followere: {data.followers}
            <img src={data.avatar_url} alt="Git profile picture" width={300} className="rounded-full"/>
        </div>
    )
}


export const githubInfo = async () => {
    const res= await fetch("https://api.github.com/users/singlasania7717")
    return res.json();
}