import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const initialUserInput = { title: '', amount: '', date: '' };

  const [userInput, setUserInput] = useState(initialUserInput);

  const titleChangeHandler = ({ target }) =>
    setUserInput((prevState) => ({ ...prevState, title: target.value }));
  const priceChangeHandler = ({ target }) =>
    setUserInput((prevState) => ({ ...prevState, amount: target.value }));
  const dateChangeHandler = ({ target }) =>
    setUserInput((prevState) => ({ ...prevState, date: target.value }));

  const submitHandler = (e) => {
    e.preventDefault();
    onSaveExpenseData({
      title: userInput.title,
      amount: parseInt(userInput.amount),
      date: new Date(userInput.date),
    });
    setUserInput(initialUserInput);
    onCancel();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="Your title"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="price"
            placeholder="Your price"
            value={userInput.amount}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            id="date"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel} className="secondary">
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
