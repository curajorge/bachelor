import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BarchelorPartyView from "./BarchelorPartyView.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
      <BarchelorPartyView></BarchelorPartyView>
  </React.StrictMode>,
)
