import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useError } from './useError';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { dispatchError } = useError();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const singIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', {
        login,
        password,
      });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      dispatchError('eror login or password');
    }
  };
  const singOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return <AuthContext.Provider value={{ user, singIn, singOut }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }
  return auth;
};
