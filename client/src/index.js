import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ComplexStore from './store/ComplexStore';
//import reportWebVitals from './reportWebVitals';

export const Context=createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    complexMas: new ComplexStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
