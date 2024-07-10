import './App.css'
import {Outlet} from "react-router-dom"
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
