import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
    <React.StrictMode>
    <App/>
    </React.StrictMode>
    </ChakraProvider>,

    <App />
  
)
