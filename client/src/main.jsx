// import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App';
import "react-toastify/dist/ReactToastify.css";
import "flowbite";
// import ZapateroProvider from './context/ZapateroProvider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <ZapateroProvider> */}
     <App /> 
    {/* </ZapateroProvider> */}
    </BrowserRouter>
)
