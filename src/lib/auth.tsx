import { createContext, useEffect, useState } from "react";
import { axios } from "./api-client";

export type AuthContextType = React.PropsWithChildren;
export const AuthContext = createContext<any>(null);
export function AuthContextProvider({ children }: AuthContextType) {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const logoutUser = () => {
    setUser(null);
  };

  useEffect(() => {
    setIsLoading(true);
    getUser()
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err.response.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export async function getUser() {
  return axios.get("/user");
}

export async function login(data: any) {
  return axios.post("/login", JSON.stringify(data));
}

export async function signin(data: any) {
  return axios.post("/signup", JSON.stringify(data));
}

export async function logout() {
  return axios.post("/logout").then((res) => res.data);
}
