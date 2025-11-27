import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // ensure invalid data doesn't bypass login
  if (!isLoggedIn || isLoggedIn !== "true") {
    localStorage.removeItem("isLoggedIn");  // resets corrupted state
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
