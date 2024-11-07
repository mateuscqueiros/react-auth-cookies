import { createContext, useEffect, useState } from 'react';
import { axios } from './api-client';

export async function login(data: any) {
  return axios.post('/login', data);
}

export async function register(data: any) {
  return axios.post('/signup', data);
}

export async function logout() {
  return axios.post('/logout');
}

export async function getUser() {
  return axios.get('/user');
}

export type AuthContextType = React.PropsWithChildren;
export const AuthContext = createContext<any>(null);
export function AuthContextProvider({ children }: AuthContextType) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function handleLogout() {
    setUser(null);
  }

  function fetchUser() {
    setIsLoading(true);
    return getUser()
      .then((res) => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, handleLogout, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
}
