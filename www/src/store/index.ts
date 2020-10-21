import products from './__mocks__/product'
import storeReducer from './reducer'
import { Reducer, Action } from '../types/store'

class Store {
   private state: any
   public dispatch: (action: Action) => void
   constructor(initialState: any, reducer: Reducer) {
      this.state = initialState
      this.dispatch = (action: Action) => reducer(this.state, action)
   }
   getState() {
      return this.state
   }
}

const state = {
   products,
   cartItems: [],
}

const store = new Store(state, storeReducer)

export { store }

/* NOTE Seclectors - Extract a piece of the Store state 
   selectDefaultTheme = state => state.theme.default
   currentValue = selectCounterVAlue(store.getState())
*/
