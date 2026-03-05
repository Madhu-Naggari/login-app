import Login from "./Login";
import Welcome from "./Welcome";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/welcome"
          element={
            <PrivateRoute>
              <Welcome />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

function PublicRoute({ children }) {
  const user = localStorage.getItem("username");
  return user ? <Navigate to="/welcome" replace /> : children;
}

function PrivateRoute({ children }) {
  const [isAuth, setIsAuth] = useState(null);
  const token = Cookies.get("token");

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setIsAuth(false);
        return;
      }

      try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.ok) {
          setIsAuth(true);
        } else {
          localStorage.removeItem("token");
          setIsAuth(false);
        }
      } catch {
        localStorage.removeItem("token");
        setIsAuth(false);
      }
    };

    verifyToken();
  }, [token]);

  if (isAuth === null) {
    return <p>Checking authentication...</p>;
  }

  return isAuth ? children : <Navigate to="/" replace />;
}
