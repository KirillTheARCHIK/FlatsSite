import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SiteStore from './store/SiteStore';
require('dotenv').config()

export const Context=createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    siteMas: new SiteStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
