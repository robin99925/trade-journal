import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";
import VerifyOtp from "../pages/auth/VerifyOtp";
import ResetPassword from "../pages/auth/ResetPassword";

import Dashboard from "../pages/dashboard/Dashboard";
import AddTrade from "../pages/dashboard/AddTrade";
import TradeHistory from "../pages/dashboard/TradeHistory";
import Analytics from "../pages/dashboard/Analytics";
import Reports from "../pages/dashboard/Reports";
import Calendar from "../pages/dashboard/Calendar";
import Settings from "../pages/dashboard/Settings";

import CapitalSetup from "../pages/onboarding/CapitalSetup";

import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";
import OnboardingRoute from "./OnboardingRoute";
import TradeDetailsPage from "../pages/dashboard/TradeDetailsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      <Route element={<OnboardingRoute />}>
        <Route path="/capital-setup" element={<CapitalSetup />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-trade" element={<AddTrade />} />
        <Route path="/trade-history" element={<TradeHistory />} />
        <Route path="/trade-history/:id" element={<TradeDetailsPage />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
