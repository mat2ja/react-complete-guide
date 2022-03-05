import Modal from '../UI/Modal.js';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context.js';
import CartItem from './CartItem.js';

const Cart = ({ onClose }) => {
  const { items, totalAmount, hasItems, addItem, removeItem } =
    useContext(CartContext);

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalAmount);

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={() => cartItemAddHandler(item)}
          onRemove={() => cartItemRemoveHandler(item.id)}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{formattedPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
