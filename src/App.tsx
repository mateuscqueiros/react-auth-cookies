import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/layout/Home";
import { Login } from "./components/layout/Login";
import { MainLayout } from "./components/layout/MainLayout";
import { AuthContextProvider } from "./lib/auth";
import { ProtectedRoute } from "./components/layout/ProtectedRoute";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Home />} />
            <Route path="/menu" element={<h1>Menu</h1>} />
            <Route path="/outpost" element={<h1>Outpost</h1>} />
            <Route path="/mission" element={<h1>Mission</h1>} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
