import { StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Yoga from './Yoga.jsx';
import Theme from './HooksExample.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Yoga/> */}
    <Theme />
    </StrictMode>,
)
