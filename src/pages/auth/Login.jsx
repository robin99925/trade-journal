import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";

import { loginUser } from "../../services/authService";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      console.log("LOGIN RESPONSE", response);

      // axios response handle
      const data = response?.data || response;

      if (!data?.success) {
        throw new Error("Invalid Credentials");
      }

      localStorage.setItem("token", data.token);

      localStorage.setItem("user", JSON.stringify(data.user));

      if (!data.user?.onboardingCompleted) {
        navigate("/capital-setup", {
          replace: true,
        });
      } else {
        navigate("/dashboard", {
          replace: true,
        });
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text:
          error?.response?.data?.message ||
          error?.message ||
          "Invalid Credentials",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="hidden md:flex md:w-1/2 relative items-center justify-center px-10 xl:px-20">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-slate-950 to-slate-950" />

          <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-violet-600/20 blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-purple-600/20 blur-[120px]" />

          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl font-bold mb-8">TradeJournal</h1>

            <span className="inline-flex items-center px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm">
              Your Trading. Your Journal. Your Growth.
            </span>

            <h2 className="mt-8 text-5xl xl:text-7xl font-bold leading-tight">
              Welcome
              <br />
              Back
              <br />
              <span className="text-violet-500">Trader.</span>
            </h2>

            <p className="mt-8 text-slate-400 text-lg max-w-xl">
              Review your performance, track your trades and improve your edge
              every day.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-5 md:p-10">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 md:p-10 shadow-2xl">
            <div className="md:hidden text-center mb-8">
              <h1 className="text-3xl font-bold">TradeJournal</h1>

              <p className="text-slate-400 mt-2">Welcome Back</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Sign In
            </h2>

            <p className="text-center text-slate-400 mt-3">
              Continue your trading journey
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <Input
                label="Email Address"
                placeholder="Enter your email"
                icon={<HiOutlineMail />}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <PasswordInput
                label="Password"
                placeholder="Enter password"
                icon={<HiOutlineLockClosed />}
                show={showPassword}
                toggle={() => setShowPassword(!showPassword)}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

              <div className="flex justify-end">
                <Link
                  // to="/forgot-password"
                  className="text-sm text-violet-400 hover:text-violet-300"
                  onClick={() => alert("work in progress")}
                >
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 font-semibold text-lg hover:scale-[1.02] transition-all disabled:opacity-50"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            <p className="text-center mt-8 text-slate-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-violet-400 hover:text-violet-300"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  placeholder,
  icon,
  type = "text",
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="block mb-2 text-sm text-slate-300">{label}</label>

      <div className="flex items-center gap-3 px-4 py-4 rounded-2xl border border-slate-700 bg-slate-900/60 focus-within:border-violet-500">
        <span className="text-slate-400 text-xl">{icon}</span>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
        />
      </div>
    </div>
  );
}

function PasswordInput({
  label,
  placeholder,
  icon,
  show,
  toggle,
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="block mb-2 text-sm text-slate-300">{label}</label>

      <div className="flex items-center gap-3 px-4 py-4 rounded-2xl border border-slate-700 bg-slate-900/60 focus-within:border-violet-500">
        <span className="text-slate-400 text-xl">{icon}</span>

        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-white placeholder:text-slate-500"
        />

        <button
          type="button"
          onClick={toggle}
          className="text-slate-400 hover:text-white"
        >
          {show ? <HiOutlineEyeOff size={22} /> : <HiOutlineEye size={22} />}
        </button>
      </div>
    </div>
  );
}
