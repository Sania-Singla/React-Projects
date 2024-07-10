import trollFace from "../images/Troll Face.png"
import "../css/header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="logo-part">
                <img src={trollFace} alt="troll face" />
                <h2>Meme Generator</h2>
            </div>
            <p>React Course - Project 3</p>
        </div>
    )
}