import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles  from './styles/globalStyles'
import Home from './pages/home/home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
