import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (!user?.onboardingCompleted) {
    return <Navigate to="/capital-setup" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
