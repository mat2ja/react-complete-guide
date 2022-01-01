import { useState, useEffect } from 'react';

export const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // dummy
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    if (storedLogin === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  return { isLoggedIn, setIsLoggedIn, loginHandler, logoutHandler };
};
