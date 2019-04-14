import React, { Component } from 'react'
import MainNavigation from '../components/MainNavigation'
import ShopContext from '../context/shop-context'
import './Cart.css'

// SECOND Consumer approach (only works on class based components)
class CartPage extends Component {
  // react will connect to the this.context object under the hood
  static contextType = ShopContext

  componentDidMount() {
    console.log(this.context)
  }

  render() {
    return (
      <React.Fragment>
        <MainNavigation
          cartItemNumber={this.context.cart.reduce((count, curItem) => {
            return count + curItem.quantity
          }, 0)}
        />
        <main className="cart">
          {this.context.cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.context.cart.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button
                    onClick={this.context.removeProductFromCart.bind(
                      this,
                      cartItem.id
                    )}
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    )
  }
}

export default CartPage
