import { ReactNode, createContext, useEffect, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard'
import { produce } from 'immer' // para conseguir mexer sem se preocupar com a imutabilidade

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  cartItemsTotal: number
  addCoffeeToCart: (coffee: CartItem) => void
  removeCartItem: (cartItemId: number) => void
  changeCartItemQuantity: (
    cartItemsId: number,
    type: 'increase' | 'decrease',
  ) => void
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storadCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

    if (storadCartItems) {
      return JSON.parse(storadCartItems)
    }
    return []
  })

  const cartQuantity = cartItems.length

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItems) => cartItems.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([])
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const CoffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (CoffeeExistsInCart >= 0) {
        const item = draft[CoffeeExistsInCart]
        draft[CoffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const CoffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (CoffeeExistsInCart >= 0) {
        draft.splice(CoffeeExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        removeCartItem,
        cartItemsTotal,
        changeCartItemQuantity,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
