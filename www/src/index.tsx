import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './containers/App'

import './styles/reset.sass'
import './styles/base.sass'

ReactDOM.render(
   <Router>
      <App />
   </Router>,
   document.getElementById('app')
)
