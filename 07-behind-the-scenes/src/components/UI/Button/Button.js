import React from 'react';
import classes from './Button.module.css';

const Button = ({ type, className, onClick, disabled, children }) => {
  console.log('🅱️ button running');
  return (
    <button
      type={type || 'button'}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
