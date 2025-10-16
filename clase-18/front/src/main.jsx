import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import App from './App'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> { /*1. agregamos el BrowserRouter*/ }
      <App />
    </BrowserRouter>
  </StrictMode>,
)
