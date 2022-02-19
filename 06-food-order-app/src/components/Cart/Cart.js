import Modal from '../UI/Modal.js';
import classes from './Cart.module.css';

const Cart = ({ isShown, onClose }) => {
  const items = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }];

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    isShown && (
      <Modal onClose={onClose}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>$35.62</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={onClose}>
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
    )
  );
};

export default Cart;
