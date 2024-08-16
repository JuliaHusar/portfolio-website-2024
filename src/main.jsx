import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {WebRouting} from "./WebRouting.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RuinTheAuxPrivacy} from "./components/RuinTheAuxPrivacy.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/portfolio-website-2024" element={<App />} />
              <Route path="/RuinTheAuxPrivacyPolicy" element={<RuinTheAuxPrivacy />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
