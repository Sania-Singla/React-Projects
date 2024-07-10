import "../css/header.css"
import reactLogo from "../images/react-logo.png"       // this is the way to insert images (import the file then use it as a variable {})

function Header() {
    return (
        <header>
            <nav className="nav-bar">
                <img src={reactLogo} alt="react logo" />
                <ul className="list">
                    <li className="list-item">About</li>
                    <li className="list-item">Contact</li>
                    <li className="list-item">Pricing</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header