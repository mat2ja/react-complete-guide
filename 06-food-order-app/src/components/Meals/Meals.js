import React from 'react';
import AvailableMeals from './AvailableMeals.js';
import MealsSummary from './MealsSummary.js';

const Meals = ({ onAdd }) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals onAdd={onAdd} />
    </>
  );
};

export default Meals;
