import React from 'react';
import AvailableMeals from './AvailableMeals.js';
import MealsSummary from './MealsSummary.js';

const Meals = (props) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
