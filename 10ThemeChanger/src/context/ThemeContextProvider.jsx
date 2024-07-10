import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({children}) => {

    const [themeMode, setThemeMode] = useState("light")

    return (
        <ThemeContext.Provider value={{themeMode,setThemeMode}} >
            {children}
        </ThemeContext.Provider>            
    )
}

export default ThemeContextProvider;