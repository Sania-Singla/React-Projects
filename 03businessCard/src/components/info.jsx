import profilePhoto from "../images/profile.jpg"
import "../css/info.css"

export default function Info() {
    return (
        <div className="info">
            <img src={profilePhoto} alt="profile photo" />
            <h2>Sania Singla</h2>
            <h5>Full Stack Developer</h5>
            <h6>saniasingla,website</h6>
        </div>
    )
}