// utils/ProtectedRoute.js
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
