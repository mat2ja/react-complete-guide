import { useContext } from 'react';
import CartContext from '../../store/cart-context.js';
import CartIcon from '../Cart/CartIcon.js';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ text = 'Your cart', onClick }) => {
  const { items, itemCount } = useContext(CartContext);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{text}</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default HeaderCartButton;
