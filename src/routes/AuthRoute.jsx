import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token) {
    return <Outlet />;
  }

  if (!user?.onboardingCompleted) {
    return <Navigate to="/capital-setup" replace />;
  }

  return <Navigate to="/dashboard" replace />;
};

export default AuthRoute;
