import { useContext } from "react";
import { axios } from "../../lib/api-client";
import { AuthContext, getUser, login, logout, signin } from "../../lib/auth";

export function Login() {
  const { logoutUser } = useContext(AuthContext);

  const user = {
    username: "emilys",
    password: "emilyspass",
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    await login(user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    await signin(user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();

    await logout()
      .then((res) => {
        logoutUser();
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.data));
  };

  const accessProtectedRoute = async () => {
    await axios
      .get("/protected")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  const fetchUser = async () => {
    await getUser()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <button type="submit" onClick={handleLogin}>
            Entrar
          </button>
          <button type="submit" onClick={handleSignup}>
            Registrar
          </button>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
          <button type="button" onClick={accessProtectedRoute}>
            GET rota protegida
          </button>
          <button type="button" onClick={fetchUser}>
            GET user
          </button>
        </div>
      </form>
    </>
  );
}
