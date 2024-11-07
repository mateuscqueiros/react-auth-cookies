import { useContext } from 'react';
import { axios } from '../../lib/api-client';
import { AuthContext, login, logout, register } from '../../lib/auth';

export function Login() {
  const { handleLogout: logoutContext, fetchUser } = useContext(AuthContext);

  const user = {
    username: 'emilys',
    password: 'emilyspass',
  };

  const handleLogin = async () => {
    await login(user)
      .then((res) => {
        fetchUser();
        console.log(res);
      })
      .catch((err) => console.log(err.response.data));
  };

  const handleRegister = async () => {
    await register(user)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  const accessProtectedRoute = async () => {
    await axios
      .get('/protected')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  const handleLogout = async () => {
    await logout()
      .then((res) => {
        logoutContext();
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <>
      <h1>Login</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button onClick={handleLogin}>Entrar</button>
        <button onClick={handleRegister}>Registrar</button>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={accessProtectedRoute}>GET rota protegida</button>
      </div>
    </>
  );
}
