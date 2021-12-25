import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prev) => prev.concat(favoriteMeetup));
  };

  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prev) => prev.filter(({ id }) => id !== meetupId));
  };

  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some(({ id }) => id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites?.length ?? 0,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
