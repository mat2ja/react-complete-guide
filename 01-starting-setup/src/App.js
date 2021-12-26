import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';

import React, { useState } from 'react';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2019, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2020, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Crypotag Zeus',
      amount: 150,
      date: new Date(2021, 11, 26),
    },
    {
      id: 'e6',
      title: 'Crypotag Thor',
      amount: 350,
      date: new Date(2022, 2, 10),
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  return (
    <div>
      <p>hello</p>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
