import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './store'
import StoreContext from './context/storeContext'

import App from './containers/App'

import './styles/reset.sass'
import './styles/base.sass'

ReactDOM.render(
   <Router>
      <StoreContext.Provider value={store.getState()}>
         <App />
      </StoreContext.Provider>
   </Router>,
   document.getElementById('app')
)
