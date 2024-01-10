import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Helmet, HelmetProvider} from "react-helmet-async"

const helmetContext = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider context={helmetContext}>
      <App>
        <Helmet>
          <title>Hello World</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <h1>Hello World</h1>
      </App>
    </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
