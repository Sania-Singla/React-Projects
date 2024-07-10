import reactLogo from "../images/react-logo.png"
import "../css/Header.css"

export default function Header() {
    return (
        <header className="header">
            <div className="logo-heading">
                <img src={reactLogo} alt="react logo" />
                <h3>ReactFacts</h3>
            </div>
            <p>React Course - Project 1</p>
        </header>
    )
}