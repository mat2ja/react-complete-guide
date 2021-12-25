import { useContext, useEffect } from 'react';
import FavoritesContext from '../../store/favorites-context.js';
import Card from '../ui/Card.js';
import classes from './MeetupItem.module.css';

export default function MeetupItem({ meetup }) {
  const { itemIsFavorite, removeFavorite, addFavorite } =
    useContext(FavoritesContext);

  const isFavorite = itemIsFavorite(meetup.id);

  const toggleFavoriteStatusHandler = () => {
    if (isFavorite) {
      removeFavorite(meetup.id);
    } else {
      addFavorite(meetup);
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <p>{meetup.address}</p>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {isFavorite ? 'Remove from favorites' : 'To favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}
