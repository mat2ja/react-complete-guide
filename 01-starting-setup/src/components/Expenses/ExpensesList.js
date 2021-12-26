import ExpenseItem from './ExpenseItem.js';
import './ExpensesList.css';

const ExpensesList = ({ expenses }) => {
  const hasExpenses = expenses?.length;

  const expenseItems = expenses.map((expense) => (
    <ExpenseItem expense={expense} key={expense.id} />
  ));

  if (!hasExpenses) {
    return <p className="expenses-list--fallback">Found no expenses.</p>;
  }

  return <ul className="expenses-list">{expenseItems}</ul>;
};

export default ExpensesList;
