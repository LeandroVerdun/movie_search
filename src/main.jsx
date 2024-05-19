import React from 'react'
import ReactDOM from 'react-dom/client'
import { BuscadorDePeliculas } from './BuscadorDePeliculas'
import './style/buscador.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BuscadorDePeliculas />
  </React.StrictMode>,
)
