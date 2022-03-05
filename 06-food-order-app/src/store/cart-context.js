import { createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  itemCount: 0,
  hasItems: false,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
