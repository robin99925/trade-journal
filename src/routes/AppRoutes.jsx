// routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/dashboard/Dashboard";
import CapitalSetup from "../pages/onboarding/CapitalSetup";
import ForgotPassword from "../pages/auth/ForgotPassword";
import VerifyOtp from "../pages/auth/VerifyOtp";
import ResetPassword from "../pages/auth/ResetPassword";
import AddTrade from "../pages/dashboard/AddTrade";
import TradeHistory from "../pages/dashboard/TradeHistory";
import Analytics from "../pages/dashboard/Analytics";
import Reports from "../pages/dashboard/Reports";
import Calendar from "../pages/dashboard/Calendar";
import Settings from "../pages/dashboard/Settings";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/capital-setup" element={<CapitalSetup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/capital-setup" element={<CapitalSetup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-trade" element={<AddTrade />} />
      <Route path="/trade-history" element={<TradeHistory />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;
