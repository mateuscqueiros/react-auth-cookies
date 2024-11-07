import { axios } from '../../lib/api-client';

export function Home() {
  const accessProtectedRoute = async () => {
    await axios
      .get('/protected')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={accessProtectedRoute}>GET rota protegida</button>
    </>
  );
}
