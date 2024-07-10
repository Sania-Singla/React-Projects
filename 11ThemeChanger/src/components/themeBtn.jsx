import "../css/themeBtn.css"
import { useContext, useState } from "react"
import { useTheme } from "../context/ThemeContext"

export default function ThemeBtn() {

    // const {themeMode,setThemeMode} = useContext(ThemeContext);
    const {themeMode,setThemeMode} = useTheme() 
    // const [checked,setChecked] = useState(false)         //no need

    return (
        <div className="comp-theme-btn ">
            <input 
                type="checkbox"
                name="themeBtn"
                id="theme-btn"
                checked={themeMode==="dark"}   //true/false
                onChange={()=>setThemeMode(prevTheme => (prevTheme==="light" ? "dark" : "light"))}
            />
            <label htmlFor="theme-btn">Toggle Theme</label>
        </div>
    )
}