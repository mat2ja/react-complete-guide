import React from 'react';
import Input from '../../UI/Input.js';

import classes from './MealItemForm.module.css';

const MealItemForm = ({ id }) => {
  const input = {
    id: `meals_${id}`,
    type: 'number',
    min: 1,
    max: 5,
    step: 1,
    defaultValue: 1,
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(`Submitting form for meal ${id}`);
  };
  return (
    <form className={classes.form} onSubmit={submitForm}>
      <Input input={input} />
      <button>Add +</button>
    </form>
  );
};

export default MealItemForm;
