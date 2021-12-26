import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const handlers = {
    titleChangeHandler({ target }) {
      // react schedules updates so is a possiblity you could reference incorrect state snapshot, thus:
      //! always use this function form if your state depends on your previous state
      setUserInput((prevState) => ({
        ...prevState,
        enteredTitle: target.value,
      }));
    },
    priceChangeHandler({ target }) {
      setUserInput((prevState) => ({
        ...prevState,
        enteredAmount: target.value,
      }));
    },
    dateChangeHandler({ target }) {
      setUserInput((prevState) => ({
        ...prevState,
        enteredDate: target.value,
      }));
    },
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(userInput);
      }}
    >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            value={userInput.enteredTitle}
            type="text"
            id="title"
            onChange={handlers.titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="price">Price</label>
          <input
            value={userInput.enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
            id="price"
            onChange={handlers.priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            value={userInput.enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            id="date"
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
