import React from 'react'
import ReactDOM from 'react-dom/client'
import 'flag-icon-css/css/flag-icons.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import './styles/index.css'
import App from './App'
import initInternationalization from './i18n'

initInternationalization()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
