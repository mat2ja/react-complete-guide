import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  const validateEmail = (value) => value.includes('@');
  switch (action.type) {
    case 'USER_INPUT': {
      return {
        value: action.value,
        isValid: validateEmail(action.value),
      };
    }
    case 'INPUT_BLUR': {
      return {
        value: state.value,
        isValid: validateEmail(state.value),
      };
    }
    default: {
      return state;
    }
  }
};
const passwordReducer = (state, action) => {
  const validatePassword = (value) => value.trim().length > 6;
  switch (action.type) {
    case 'USER_INPUT': {
      return {
        value: action.value,
        isValid: validatePassword(action.value),
      };
    }
    case 'INPUT_BLUR': {
      return {
        value: state.value,
        isValid: validatePassword(state.value),
      };
    }
    default: {
      return state;
    }
  }
};

const Login = ({ onLogin }) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  useEffect(() => {
    const tid = setTimeout(() => {
      console.log('checking form validity');
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return () => {
      clearTimeout(tid);
    };
  }, [emailState, passwordState]);

  const emailChangeHandler = ({ target }) => {
    dispatchEmail({
      type: 'USER_INPUT',
      value: target.value,
    });
  };

  const passwordChangeHandler = ({ target }) => {
    dispatchPassword({
      type: 'USER_INPUT',
      value: target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
