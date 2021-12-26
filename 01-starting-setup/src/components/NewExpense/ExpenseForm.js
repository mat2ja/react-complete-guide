import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const initialUserInput = {
    title: '',
    amount: '',
    date: '',
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  const handlers = {
    titleChangeHandler({ target }) {
      // react schedules updates so is a possiblity you could reference incorrect state snapshot, thus:
      //! always use this function form if your state depends on your previous state
      setUserInput((prevState) => ({
        ...prevState,
        title: target.value,
      }));
    },
    priceChangeHandler({ target }) {
      setUserInput((prevState) => ({
        ...prevState,
        amount: target.value,
      }));
    },
    dateChangeHandler({ target }) {
      setUserInput((prevState) => ({
        ...prevState,
        date: target.value,
      }));
    },
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };
    console.log(expenseData);
    setUserInput(initialUserInput);
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
            onChange={handlers.titleChangeHandler}
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
            onChange={handlers.priceChangeHandler}
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
            onChange={handlers.dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
