import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const Expenseitem = ({ expense }) => {
  const [title, setTitle] = useState(expense.title);

  const clickHandler = (e) => {
    setTitle('new title');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          ${expense.amount.toLocaleString()}
        </div>
      </div>
      <button onClick={clickHandler} onKeyDown={clickHandler}>
        Change title
      </button>
    </Card>
  );
};

export default Expenseitem;
