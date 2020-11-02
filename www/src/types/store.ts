/* Reducer */
export type Reducer = <T>(state: T, action: Action) => T

/* Action Types*/
export type ActionType =
   | 'products/id'
   | 'products'
   | 'filteredProducts'
   | 'cartProducts/add/id'
   | 'cartProducts/remove/id'
   | 'cartProducts'

/* Actions */
export interface Action {
   type: ActionType
   payload?: any
}

/* Action creators */
export type ActionCreator = (payload?: any) => Action

export interface Store {
   state: any
   getState: () => any
   dispatch: (action: Action) => any
}
