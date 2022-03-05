import React, { useReducer, useMemo } from 'react';

import CartContext from './cart-context.js';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingCartItemIdx = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      let updatedItems;

      if (existingCartItemIdx !== -1) {
        const existingCartItem = state.items[existingCartItemIdx];
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIdx] = updatedItem;
      } else {
        updatedItems = [...state.items, action.item];
      }

      return {
        ...state,
        items: updatedItems,
      };
    }
    case 'REMOVE_ITEM': {
      const existingItemIdx = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingItemIdx];

      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };

        updatedItems = [...state.items];
        updatedItems[existingItemIdx] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
      };
    }
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = (item) => {
    dispatch({ type: 'ADD_ITEM', item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  console.log('running context');

  const totalAmount = useMemo(
    () =>
      cartState.items.reduce(
        (total, item) => total + item.price * item.amount,
        0
      ),
    [cartState.items]
  );

  const itemCount = useMemo(
    () => cartState.items.reduce((count, item) => count + item.amount, 0),
    [cartState.items]
  );

  const hasItems = cartState.items.length > 0;

  const cartContext = {
    items: cartState.items,
    totalAmount,
    itemCount,
    hasItems,
    addItem: addItemHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
