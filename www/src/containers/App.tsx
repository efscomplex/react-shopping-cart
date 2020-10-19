import Header from 'components/core/header/Header'
import React from 'react'
import styled from 'styled-components'

function App({className}: any) {
   return (
      <div className={className}>
         <Header/>
      </div>
   )
}

export default styled(App)`
   color: red;
`