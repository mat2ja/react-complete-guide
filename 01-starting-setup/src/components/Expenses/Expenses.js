import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart.js';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = (selectedYear) => {
    selectedYear = parseInt(selectedYear);
    setFilteredYear(isNaN(selectedYear) ? '' : selectedYear);
  };

  const filterByYear = ({ date }) =>
    filteredYear ? filteredYear === date.getFullYear() : true;

  const filteredExpenses = items?.filter(filterByYear) ?? [];

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
