import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout.js';
import AllMeetupsPage from './pages/AllMeetups.js';
import FavoritesPage from './pages/Favorites.js';
import NewMeetupPage from './pages/NewMeetup.js';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
