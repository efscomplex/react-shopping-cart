import * as React from 'react'
import styled from 'styled-components'

function App({className}: any) {
   return (
      <div className={className}>
         <h1>hello world!!</h1>
      </div>
   )
}

export default styled(App)`
   color: red;
`