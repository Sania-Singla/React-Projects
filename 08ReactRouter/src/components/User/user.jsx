import { useParams } from "react-router-dom"

export default function User() {

    const {userId} = useParams();

    return(
        <div className="bg-gray-700 text-white text-center p-4 text-2xl">User: {userId}</div>
    )
}