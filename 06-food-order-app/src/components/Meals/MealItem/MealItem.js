import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm.js';

const MealItem = ({ meal, onAdd }) => {
  const price = `$${meal.price?.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm  onAdd={onAdd} id={meal.id} />
      </div>
    </li>
  );
};

export default MealItem;
