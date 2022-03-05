import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context.js';
import CartIcon from '../Cart/CartIcon.js';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ text = 'Your cart', onClick }) => {
  const { itemCount } = useContext(CartContext);
  const [btnIsHiglighted, setBtnIsHiglighted] = useState(false);

  const btnClasses = `${classes.button} ${btnIsHiglighted ? classes.bump : ''}`;

  useEffect(() => {
    if (itemCount) {
      setBtnIsHiglighted(true);
    }
    const timer = setTimeout(() => setBtnIsHiglighted(false), 300);

    return () => {
      clearTimeout(timer);
    };
  }, [itemCount]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{text}</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default HeaderCartButton;
