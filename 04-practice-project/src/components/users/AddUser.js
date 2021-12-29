import Button from '../UI/Button.js';
import Card from '../UI/Card.js';
import c from './AddUser.module.css';
import React, { useState } from 'react';
import ErrroModal from '../UI/ErrorModal.js';

const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [modalShown, setModalShown] = useState(false);
  const [errorMsg, setErrorMsg] = useState({ title: '', message: '' });

  const addUserHandler = (e) => {
    e.preventDefault();
    const formValid = validateForm();
    if (!formValid) {
      setModalShown(true);
      setErrorMsg({
        title: 'Invalid info',
        message: 'Check the details and try again.',
      });
    } else {
      onAddUser({ username, age });
      resetForm();
    }
  };

  const usernameChangeHandler = ({ target }) =>
    setUsername(target.value.trim());
  const passwordChangeHandler = ({ target }) => setAge(Number(target.value));

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

  const closeModalHandler = () => {
    setModalShown(false);
  };

  return (
    <>
      {modalShown && (
        <ErrroModal
          title={errorMsg.title}
          message={errorMsg.message}
          onClose={closeModalHandler}
        />
      )}
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
            🌟️ Add user 🌟️
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
