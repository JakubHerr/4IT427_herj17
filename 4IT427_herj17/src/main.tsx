import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { WatchlistProvider } from './context/WatchlistContext.tsx'
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
          <WatchlistProvider>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
          </WatchlistProvider>
  </StrictMode>,
)
