import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiOutlineEyeOff,
} from "react-icons/hi";

import { registerUser } from "../../services/authService";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return Swal.fire({
        icon: "warning",
        title: "All fields are required",
      });
    }

    if (formData.password !== formData.confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Passwords do not match",
      });
    }

    try {
      setLoading(true);

      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      };

      const response = await registerUser(payload);
      console.log(response);

      Swal.fire({
        icon: "success",
        title: response.message || "Account created successfully",
      });

      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/");
    } catch (error) {
      const errorData = error?.response?.data;

      let errorMessage = "Something went wrong";

      if (errorData?.errors?.length > 0) {
        errorMessage = errorData.errors[0].msg;
      } else if (errorData?.message) {
        errorMessage = errorData.message;
      }

      Swal.fire({
        icon: "error",
        title: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* LEFT SECTION */}
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
              Track.
              <br />
              Analyze.
              <br />
              <span className="text-violet-500">Grow Your Capital.</span>
            </h2>

            <p className="mt-8 text-slate-400 text-lg max-w-xl">
              A powerful trading journal designed to help traders track every
              trade, analyze performance, improve discipline, and accelerate
              growth.
            </p>

            <div className="mt-14 space-y-6">
              <Feature
                title="Track Every Trade"
                text="Store and review all your trades."
              />

              <Feature
                title="Advanced Analytics"
                text="Understand your trading performance."
              />

              <Feature
                title="Trading Calendar"
                text="Review your results day by day."
              />

              <Feature
                title="Strategy Performance"
                text="Find your best performing setups."
              />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-5 md:p-10">
          <div
            className="
              w-full
              max-w-xl
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-6
              sm:p-8
              md:p-10
              shadow-2xl
            "
          >
            <div className="md:hidden text-center mb-8">
              <h1 className="text-3xl font-bold">TradeJournal</h1>

              <p className="text-slate-400 mt-2">Start Your Trading Journey</p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Create Account
            </h2>

            <p className="text-center text-slate-400 mt-3">
              Join thousands of traders improving every day.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                icon={<HiOutlineUser />}
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />

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
                placeholder="Create password"
                icon={<HiOutlineLockClosed />}
                show={showPassword}
                toggle={() => setShowPassword(!showPassword)}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm password"
                icon={<HiOutlineLockClosed />}
                show={showConfirmPassword}
                toggle={() => setShowConfirmPassword(!showConfirmPassword)}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-600
                  to-purple-600
                  font-semibold
                  text-lg
                  transition-all
                  hover:scale-[1.02]
                  disabled:opacity-50
                "
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            <p className="text-center mt-8 text-slate-400">
              Already have an account?{" "}
              <Link to="/" className="text-violet-400 hover:text-violet-300">
                Sign In
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

      <div
        className="
          flex
          items-center
          gap-3
          px-4
          py-4
          rounded-2xl
          border
          border-slate-700
          bg-slate-900/60
          focus-within:border-violet-500
        "
      >
        <span className="text-slate-400 text-xl">{icon}</span>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            flex-1
            bg-transparent
            outline-none
            text-white
            placeholder:text-slate-500
          "
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

      <div
        className="
          flex
          items-center
          gap-3
          px-4
          py-4
          rounded-2xl
          border
          border-slate-700
          bg-slate-900/60
          focus-within:border-violet-500
        "
      >
        <span className="text-slate-400 text-xl">{icon}</span>

        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            flex-1
            bg-transparent
            outline-none
            text-white
            placeholder:text-slate-500
          "
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

function Feature({ title, text }) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex-shrink-0" />

      <div>
        <h4 className="font-semibold text-lg">{title}</h4>

        <p className="text-slate-400">{text}</p>
      </div>
    </div>
  );
}
