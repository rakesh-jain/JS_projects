import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Yoga from './Yoga.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Yoga/>
    </StrictMode>,
)
