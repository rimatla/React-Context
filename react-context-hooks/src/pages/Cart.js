import React, { useContext, useEffect } from 'react'
import MainNavigation from '../components/MainNavigation'
import { ShopContext } from '../context/GlobalState'
import './Cart.css'

// SECOND Consumer approach (only works on class based components)
const CartPage = props => {
  // react will connect to the this.context object under the hood
  // static contextType = ShopContext
  // componentDidMount() {
  //   console.log('****DidMount***', this.context)
  // }

  const context = useContext(ShopContext)
  // useEffect is the equivalent to componentDidMount on functional components
  useEffect(() => {
    console.log('USE EFFECT', context)
  }, []) // only run func once when component mounts

  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity
        }, 0)}
      />
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={context.removeProductFromCart.bind(
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

export default CartPage
