import "../css/card.css"
import ThemeContext from "../context/ThemeContext"
import { useContext } from "react"

export default function Card() {

    const {themeMode} = useContext(ThemeContext)
        
    const cardClass = ` card ${themeMode} `
    return (
        <div className={cardClass}>
            
            <div className="image">
                <img src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="thumbnail" />
            </div>

            <div className="descr">
                <p>Apple Watch Series 7 GPS, Aluminium Case</p>

                <div className="rating">
                    ⭐⭐⭐⭐⭐ <span>4.0</span>
                </div>
                
                <div className="price-section">
                    <div className="price">
                        $599
                    </div>

                    <button className="add-to-cart">
                        Add To Cart
                    </button>
                </div>
            </div>

        </div>
    )
}