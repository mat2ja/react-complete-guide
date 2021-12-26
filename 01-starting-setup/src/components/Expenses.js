import ExpenseItem from './ExpenseItem.js';
import Card from './Card.js';
import './Expenses.css';

export default function Expenses({ items }) {
  const expenseItems = items.map((expense) => (
    <ExpenseItem expense={expense} key={expense.id} />
  ));

  return <Card className="expenses">{expenseItems}</Card>;
}
