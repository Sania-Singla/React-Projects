import './App.css'
import Info from './components/info'
import About from './components/about'
import Interests from './components/interests'
import Buttons from './components/buttons'
import Footer from './components/footer'

function App() {
  return (
    <div className='mainContainer'>
      <Info />
      <Buttons />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
