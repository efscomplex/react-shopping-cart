import { products, categories } from './__mocks__/'
import reducer from './reducer'
import { Action } from '../types/store'

class Store {
   private state: any
   public setter = (state: any) => {}
   constructor(initialState: any) {
      this.state = initialState
   }
   
   dispatch(action: Action) {
      this.state = reducer(this.state, action)
      this.setter(this.state)
   }

   getState() {
      return this.state
   }
}

const state = {
   categories,
   products,
   filteredProducts: products,
   cartItems: [],
}
const store = new Store(state)

export { store }
