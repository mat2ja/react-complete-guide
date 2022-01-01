import React from 'react';
import Button from '../UI/Button/Button.js';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = ({ onLogout }) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
