import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './ambikai/App01'

import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <App />
    </HashRouter>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
)
