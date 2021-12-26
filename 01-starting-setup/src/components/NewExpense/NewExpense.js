import { nanoid } from 'nanoid';

import ExpenseForm from './ExpenseForm.js';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: nanoid(),
    };
    console.log('new expense', expenseData);
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
