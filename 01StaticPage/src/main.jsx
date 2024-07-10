import React from 'react'         // although in newer versions it is auto imported
import ReactDOM from 'react-dom/client'  //or "react-dom" only
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
