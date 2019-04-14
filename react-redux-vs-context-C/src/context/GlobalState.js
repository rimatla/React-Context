import React, { Component } from 'react'
import ShopContext from './shop-context'

class GlobalState extends Component {
  // main state
  state = {
    products: [
      { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
      { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
      { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
      { id: 'p4', title: 'Half-dried plant', price: 2.99 }
    ],
    cart: [],
    cartSum: 0
  }

  // method
  addProductToCart = product => {
    console.log('adding', product)

    const updatedCart = [...this.state.cart]
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

    this.setState({ cart: updatedCart })
  }

  // method
  removeProductFromCart = productId => {
    console.log('removing', productId)
    const updatedCart = [...this.state.cart]
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

    this.setState({ cart: updatedCart })
  }

  render() {
    const { products, cart } = this.state
    return (
      <ShopContext.Provider
        value={{
          // ...this.state
          products,
          cart,
          addProductToCart: this.addProductToCart,
          removeProductFromCart: this.removeProductFromCart
        }}
      >
        {/* return children */}
        {this.props.children}
      </ShopContext.Provider>
    )
  }
}

export default GlobalState
