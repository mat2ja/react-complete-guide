import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ({ selectedYear, onChangeFilter }) => {
  const options = [
    { value: '', label: 'All' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' },
    { value: '2018', label: '2018' },
  ];

  const dropdownChangeHandler = ({ target }) => {
    onChangeFilter(target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={dropdownChangeHandler}>
          {options.map(({ value, label }) => (
            <option value={value} key={label}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
