import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProductsPage from './pages/Products'
import CartPage from './pages/Cart'
import './App.css'

//context
// import ShopContext from './context/shop-context'
import GlobalState from './context/GlobalState'

class App extends Component {
  // removed all the state and methods from here to Global State

  render() {
    // const { products, cart } = this.state
    return (
      // <ShopContext.Provider value={{}}>
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/cart" component={CartPage} exact />
          </Switch>
        </BrowserRouter>
       {/* </ShopContext.Provider> */}
      </GlobalState>
    )
  }
}

export default App
