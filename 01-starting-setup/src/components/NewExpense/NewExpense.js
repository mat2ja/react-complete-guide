import { nanoid } from 'nanoid';
import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: nanoid(),
    };
    console.log(expenseData);
    onAddExpense(expenseData);
  };

  const startEditingHandler = () => setIsEditing(true);
  const stopEditingHandler = () => setIsEditing(false);

  return (
    <div className="new-expense">
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;
