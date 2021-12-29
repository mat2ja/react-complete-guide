import Button from '../UI/Button.js';
import Card from '../UI/Card.js';
import c from './AddUser.module.css';
import React, { useState } from 'react';

const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = (e) => {
    e.preventDefault();
    const formValid = validateForm();
    if (!formValid) {
      return console.log('Info not valid');
    }
    onAddUser({ username, age });
    resetForm();
  };

  const usernameChangeHandler = ({ target }) => {
    setUsername(target.value.trim());
  };

  const passwordChangeHandler = ({ target }) => {
    setAge(Number(target.value));
  };

  const resetForm = () => {
    setUsername('');
    setAge('');
  };

  const validators = {
    validateUsername() {
      return username !== '' && username.length > 2;
    },
    validateAge() {
      return age !== '' && age > 1 && age <= 140;
    },
  };

  const validateForm = () => {
    const { validateUsername, validateAge } = validators;
    const validations = [validateUsername(), validateAge()];
    const formValid = validations.every(Boolean);
    return formValid;
  };

  return (
    <Card className={c['input-card']}>
      <form onSubmit={addUserHandler}>
        <div className={c['input-group']}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="off"
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className={c['input-group']}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            id="age"
            min="1"
            max="140"
            autoComplete="off"
            value={age}
            onChange={passwordChangeHandler}
          />
        </div>
        <Button onClick={addUserHandler} type="submit">
          Add user
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
