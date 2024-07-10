import './App.css'
import ThemeBtn from './components/themeBtn'
import Card from "./components/card"
import ThemeContext from './context/ThemeContext'
import { useState } from 'react'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  return (
    <ThemeContext.Provider value={{themeMode,setThemeMode}} >
      <div className='main-container'>

        <div className="themeBtn-section">
          <ThemeBtn />
        </div>
        
        <div className="card-section">
          <Card />
        </div>

      </div>
    </ThemeContext.Provider>
  )
}

export default App
