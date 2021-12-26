import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem.js';
import ExpensesFilter from './ExpensesFilter.js';
import './Expenses.css';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = (selectedYear) => {
    selectedYear = parseInt(selectedYear);
    setFilteredYear(isNaN(selectedYear) ? '' : selectedYear);
  };

  const filterByYear = ({ date }) =>
    filteredYear ? filteredYear === date.getFullYear() : true;

  const expenseItems = items
    .filter(filterByYear)
    .map((expense) => <ExpenseItem expense={expense} key={expense.id} />);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseItems}
    </Card>
  );
};

export default Expenses;
