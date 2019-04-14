// actions
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
// method
const addProductToCart = (product, state) => {
  console.log('adding', product)

  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex(item => item.id === product.id)

  if (updatedItemIndex < 0) {
    updatedCart.push({ ...product, quantity: 1 })
  } else {
    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    }
    updatedItem.quantity++
    updatedCart[updatedItemIndex] = updatedItem
  }

  return { ...state, cart: updatedCart }
}

// method
const removeProductFromCart = (productId, state) => {
  console.log('removing', productId)
  const updatedCart = [...state.cart]
  const updatedItemIndex = updatedCart.findIndex(item => item.id === productId)

  const updatedItem = {
    ...updatedCart[updatedItemIndex]
  }
  updatedItem.quantity--
  if (updatedItem.quantity <= 0) {
    updatedCart.splice(updatedItemIndex, 1)
  } else {
    updatedCart[updatedItemIndex] = updatedItem
  }

  return { ...state, cart: updatedCart }
}

// reducers
export const shopReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return addProductToCart(action.product, state)
    case REMOVE_PRODUCT:
      return removeProductFromCart(action.productId, state)
    default:
      return state
  }
}
