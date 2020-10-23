import { useContext } from 'react'
import storeContext from '../context/storeContext'

export default function useSelector(callback: Function) {
   const state = useContext(storeContext)

   return callback(state)
}
