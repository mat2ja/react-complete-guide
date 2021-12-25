import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList.js';
import FavoritesContext from '../store/favorites-context.js';

export default function FavoritesPage({}) {
  const { favorites, totalFavorites } = useContext(FavoritesContext);

  let content;

  content = totalFavorites ? (
    <MeetupList meetups={favorites} />
  ) : (
    <p>You got no favorites yet. Add some? ✨️</p>
  );

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
