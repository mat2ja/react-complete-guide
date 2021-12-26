import { nanoid } from 'nanoid';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';

import React, { useState } from 'react';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: nanoid(),
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2019, 7, 14),
    },
    {
      id: nanoid(),
      title: 'Ledger Nano S',
      amount: 100,
      date: new Date(2019, 9, 10),
    },
    {
      id: nanoid(),
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: nanoid(),
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2020, 2, 28),
    },
    {
      id: nanoid(),
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: nanoid(),
      title: 'Macbook Air M1',
      amount: 1399,
      date: new Date(2021, 4, 5),
    },
    {
      id: nanoid(),
      title: 'Cryptotag Zeus',
      amount: 150,
      date: new Date(2021, 11, 26),
    },
    {
      id: nanoid(),
      title: 'Cryptotag Thor',
      amount: 350,
      date: new Date(2022, 2, 10),
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
