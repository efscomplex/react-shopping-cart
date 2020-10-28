import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './containers/app/App'

import './styles/reset.sass'
import './styles/base.sass'
import withApolloClient from 'HOCs/withApolloClient'

const ApolloApp = withApolloClient(App)
render(
   <Router>
      <ApolloApp />
   </Router>,
   document.getElementById('app')
)
