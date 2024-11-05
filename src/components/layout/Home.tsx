import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, logout } from "../../lib/auth";
import { axios } from "../../lib/api-client";

export function Home() {
  const { logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();

    await logout()
      .then(() => {
        logoutUser();
      })
      .catch((err) => console.log(err.response.data));
  };

  const accessProtectedRoute = async () => {
    await axios
      .get("/protected")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  return (
    <>
      <h1>Home</h1>
      <button type="button" onClick={() => navigate("/mission")}>
        Go to mission
      </button>

      <button type="button" onClick={accessProtectedRoute}>
        GET rota protegida
      </button>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}
