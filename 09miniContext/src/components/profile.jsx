import { useContext } from "react"
import UserContext from "../context/userContext"

export default function Profile() {

    const {user} = useContext(UserContext)
    return (
        <h2>{user.username ? `WELCOME: ${user.username}` : `PLEASE LOGIN` }</h2>
    )
}