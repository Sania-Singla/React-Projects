import './App.css'
import ThemeBtn from './components/themeBtn'
import Card from "./components/card"
import ThemeContextProvider from "./context/ThemeContextProvider"

function App() {
  return (
    <ThemeContextProvider >
      <div className='main-container'>

        <div className="themeBtn-section">
          <ThemeBtn />
        </div>
        
        <div className="card-section">
          <Card />
        </div>

      </div>
    </ThemeContextProvider>
  )
}

export default App
