import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './pages/styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <BrowserRouter>
      <App/>
    </BrowserRouter>

  </Provider>

)
