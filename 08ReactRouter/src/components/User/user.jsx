import { useParams } from "react-router-dom"

export default function User() {

    const {userId} = useParams();     //name should be same as defined in the routes

    return(
        <div className="bg-gray-700 text-white text-center p-4 text-2xl">User: {userId}</div>
    )
}