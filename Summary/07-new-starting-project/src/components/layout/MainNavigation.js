import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoritesContext from '../../store/favorites-context.js';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  const { totalFavorites } = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
            <span className={classes.badge}>{totalFavorites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
