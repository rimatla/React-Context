import React from 'react'
import MainNavigation from '../components/MainNavigation'
import { ShopContext } from '../context/GlobalState'
import './Products.css'

// FIRST Approach for consumer = Render Prop Function
const ProductsPage = props => {
  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
          <MainNavigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity
            }, 0)}
          />
          <main className="products">
            <ul>
              {context.products.map(product => (
                <li key={product.id}>
                  <div>
                    <strong>{product.title}</strong> - ${product.price}
                  </div>
                  <div>
                    <button
                      onClick={context.addProductToCart.bind(this, product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  )
}

export default ProductsPage
