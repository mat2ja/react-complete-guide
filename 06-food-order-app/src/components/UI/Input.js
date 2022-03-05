import { forwardRef } from 'react/cjs/react.production.min';
import classes from './Input.module.css';

const Input = forwardRef(({ input, label }, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={input?.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
