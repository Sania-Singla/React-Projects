import "../css/card.css"
import star from "../images/star.png"          
        
export default function Card(props) {     // or just destructure it as { card }
    let badgeText;
    if(props.card.openSpots === 0) 
    {
        badgeText = "SOLD OUT"
    }
    else if (props.card.location === "Online")
    {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {/* {props.card.openSpots === 0 && <div className="card-badge">SOLD OUT</div>} */}
            {/* better approach 👇*/}
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <div className="card-image">
                <img src={props.card.img} alt="hero images" />
            </div>
            <div className="star-part">
                <img src={star} alt="star" className="star"/>
                <p className="rating">{props.card.rating.toFixed(1)}</p>       {/*to show value till one decimal place cause there is no float type in js*/}
                <p className="bracket">({props.card.reviewCount}) &#8226;</p>
                <p className="country">{props.card.location}</p>
            </div>
            <p className="descr">{props.card.descr}</p>
            <p className="pricing">From ${props.card.price}</p>
        </div>
    )
}