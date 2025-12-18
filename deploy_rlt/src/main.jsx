import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import axios from 'axios'
import './index.css'
import App from './App.jsx'

import { API_BASE_URL } from './config'

console.log("🚀 Connecting to Backend at:", API_BASE_URL);

// Backend API URL configuration (Render support)
axios.defaults.baseURL = API_BASE_URL;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
