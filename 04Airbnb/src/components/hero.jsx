import "../css/hero.css"
import heroImages from "../images/hero-images.png"

export default function Hero() {
    return (
        <div className="hero">
            <div className="image">
                <img src={heroImages} alt="hero images" />
            </div>
            <h2 className="heading">Online Experiences</h2>
            <p className="para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}