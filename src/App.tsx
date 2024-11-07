import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {
  Home,
  Login,
  MainLayout,
  MenuId,
  ProtectedRoute,
} from './components/layout';
import { AuthContextProvider } from './lib/auth';

/* const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/menu', element: <h1>Menu</h1> },
      { path: '/outpost', element: <h1>Outpost</h1> },
      { path: '/mission', element: <h1>Mission</h1> },
    ],
  },
]); */

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />

              <Route path="/menu">
                <Route index element={<h1>Menu</h1>} />
                <Route path=":id" element={<MenuId />} />
              </Route>

              <Route path="/outpost" element={<h1>Outpost</h1>} />
              <Route path="/mission" element={<h1>Mission</h1>} />
            </Route>

            <Route element={<MainLayout />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
