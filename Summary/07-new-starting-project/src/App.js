import { Route, Switch } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation.js';
import AllMeetupsPage from './pages/AllMeetups.js';
import FavoritesPage from './pages/Favorites.js';
import NewMeetupPage from './pages/NewMeetup.js';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
