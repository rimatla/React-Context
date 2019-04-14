import React, { useState } from 'react'
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

  // separate state (react will overwrite all state even if they don't update together)
  const [cart, setCart] = useState([])

  // method now handled by reducer
  const addProductToCart = product => {
    console.log('adding', product)

    const updatedCart = [...cart]
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id
    )

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 })
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      }
      updatedItem.quantity++
      updatedCart[updatedItemIndex] = updatedItem
    }

    setTimeout(() => {
      setCart(updatedCart)
    }, 300)
  }

  // method
  const removeProductFromCart = productId => {
    console.log('removing', productId)
    const updatedCart = [...cart]
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    )

    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    }
    updatedItem.quantity--
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1)
    } else {
      updatedCart[updatedItemIndex] = updatedItem
    }

    setTimeout(() => {
      setCart(updatedCart)
    }, 300)
  }

  return (
    <ShopContext.Provider
      value={{
        // ...this.state
        products,
        cart,
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
