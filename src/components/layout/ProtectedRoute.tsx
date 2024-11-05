import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../lib/auth";

type ProtectedRouteProps = {} & React.PropsWithChildren;

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (user === null) {
    return <Navigate to="/login" />;
  }

  return children;
}
