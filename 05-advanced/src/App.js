import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-contetxt.js';
import { useLogin } from './useLogin.js';

function App() {
  const { isLoggedIn, login, logout } = useLogin();

  return (
    <AuthContext.Provider value={{ isLoggedIn }}>
      <MainHeader onLogout={logout} />
      <main>
        {!isLoggedIn && <Login onLogin={login} />}
        {isLoggedIn && <Home onLogout={logout} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
