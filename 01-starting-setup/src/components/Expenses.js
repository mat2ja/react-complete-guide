import ExpenseItem from './ExpenseItem.js';
import './Expenses.css';

export default function Expenses({ items }) {
  const expenseItems = items.map((expense) => (
    <ExpenseItem expense={expense} key={expense.id} />
  ));

  return <div className="items">{expenseItems}</div>;
}
