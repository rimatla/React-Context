import React, { useReducer } from 'react'
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './reducers'
// create context
export const ShopContext = React.createContext()

const GlobalState = props => {
  // main state
  const products = [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 }
  ]

  // state from the reducer
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] }) // pass initial state as 2nd argument

  // method now handled by reducer
  const addProductToCart = product => {
    console.log('adding', product)
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product })
    }, 300)
  }

  // method
  const removeProductFromCart = productId => {
    console.log('removing', productId)
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId })
    }, 300)
  }

  return (
    <ShopContext.Provider
      value={{
        // ...this.state
        products,
        cart: cartState.cart,
        addProductToCart,
        removeProductFromCart
      }}
    >
      {/*  LOOK here return children */}
      {props.children}
    </ShopContext.Provider>
  )
}

export default GlobalState
