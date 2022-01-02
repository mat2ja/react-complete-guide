import React, {
  useContext,
  useEffect,
  useReducer,
  useState,
  useRef,
} from 'react';
import AuthContext from '../../store/auth-contetxt.js';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import Input from '../UI/Input/Input.js';
import classes from './Login.module.css';

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

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const { onLogin } = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    setFormIsValid(emailIsValid && passwordIsValid);

    return () => {
      console.log('cleanup');
    };
  }, [emailIsValid, passwordIsValid]);

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
    if (formIsValid) {
      onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
