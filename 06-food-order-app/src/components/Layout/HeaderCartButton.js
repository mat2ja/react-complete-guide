import React from 'react';
import CartIcon from '../Cart/CartIcon.js';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ({ text = 'Your cart', onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{text}</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
