import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = ({ target }) => {
    console.log(target.value);
    // setEnteredTitle(target.value);
    setUserInput({
      ...userInput,
      enteredTitle: target.value,
    });
  };
  const priceChangeHandler = ({ target }) => {
    console.log(target.value);
    // setEnteredAmount(target.value);
    setUserInput({
      ...userInput,
      enteredAmount: target.value,
    });
  };
  const dateChangeHandler = ({ target }) => {
    console.log(target.value);
    // setEnteredDate(target.value);
    setUserInput({
      ...userInput,
      enteredDate: target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            value={userInput.enteredTitle}
            type="text"
            id="title"
            onChange={titleChangeHandler}
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
            onChange={priceChangeHandler}
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
            onChange={dateChangeHandler}
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
