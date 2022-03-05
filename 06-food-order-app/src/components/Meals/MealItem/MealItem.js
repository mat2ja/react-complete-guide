import CartContext from '../../../store/cart-context.js';
import classes from './MealItem.module.css';
import { useContext } from 'react';
import MealItemForm from './MealItemForm.js';

const MealItem = ({ meal }) => {
  const price = `$${meal.price?.toFixed(2)}`;
  const { addItem } = useContext(CartContext);

  const addToCartHandler = (amount) => {
    addItem({ ...meal, amount });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={meal.id} />
      </div>
    </li>
  );
};

export default MealItem;
