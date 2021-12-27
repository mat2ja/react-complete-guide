import React, { useState } from 'react';
import Button from '../../UI/Button/Button';

// import styled from 'styled-components';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${({ invalid }) => (invalid ? 'red' : 'black')};
//   }

//   input {
//     font: inherit;
//     display: block;
//     width: 100%;
//     border: 1px solid ${({ invalid }) => (invalid ? 'red' : '#ccc')};
//     background: ${({ invalid }) => (invalid ? 'pink' : 'transparent')};
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = ({ target }) => {
    if (target.value.trim().length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setEnteredValue(target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
