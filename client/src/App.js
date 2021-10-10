import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
require('dotenv').config()

const App = () =>{
    console.log(process.env)
    return(
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;