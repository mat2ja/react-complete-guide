import React from 'react';
import AuthContext from '../../store/auth-contetxt.js';
import classes from './Navigation.module.css';

const Navigation = ({ onLogout }) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        console.log(ctx);
        return (
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
