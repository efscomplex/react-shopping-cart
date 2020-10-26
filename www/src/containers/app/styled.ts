import styled from 'styled-components'
import { Container } from '../../components/common'
import { Aside, Search } from '../../components/core'
import { breaks } from '../../config'
import Main from '../main/Main'

export default styled(Container)`
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
   padding: 1rem;
   display: flex;
   flex-wrap: wrap;
   gap: 1rem 3rem;
   ${Search} {
      margin: 1rem 0 2rem auto;
      border-radius: 2px;
      @media (max-width: ${breaks.get('medium')}) {
         width: 100%;
      }
   }
   ${Aside} {
      width: max-content;
      @media (max-width: 900px) {
         flex-direction: row;
      }
   }
   ${Main} {
      flex-grow: 1;
      @media (min-width: ${breaks.get('medium')}) {
         width: 500px;
      }
   }
`
