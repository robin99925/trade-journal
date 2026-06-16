import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Login API success hone ke baad
    navigate("/capital-setup");
  };
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="mx-auto min-h-screen max-w-[1600px] grid md:grid-cols-2">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center px-10 lg:px-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-transparent" />

          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-12">TradeJournal</h1>

            <span className="inline-flex px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm mb-8">
              Welcome Back Trader 🚀
            </span>

            <h2 className="text-5xl xl:text-7xl font-bold leading-tight">
              Continue Your
              <br />
              <span className="text-violet-500">Trading Journey.</span>
            </h2>

            <p className="text-slate-400 text-lg mt-8 max-w-xl">
              Track trades, monitor capital growth and improve your performance
              with data-driven insights.
            </p>

            <div className="mt-12 space-y-6">
              <Feature
                title="Track Every Trade"
                text="Never lose your trading history."
              />

              <Feature
                title="Monitor ROI"
                text="Keep an eye on capital growth."
              />

              <Feature
                title="Analyze Strategies"
                text="Find your most profitable setups."
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-6 md:p-10">
          <div
            className="
              w-full
              max-w-xl
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8 md:p-10
            "
          >
            <h2 className="text-4xl font-bold text-center">Sign In</h2>

            <p className="text-center text-slate-400 mt-3">
              Access your trading journal dashboard.
            </p>

            <form className="mt-10 space-y-6">
              <Input
                icon={<HiOutlineMail />}
                label="Email Address"
                placeholder="Enter your email"
              />

              <Input
                icon={<HiOutlineLockClosed />}
                label="Password"
                type="password"
                placeholder="Enter your password"
              />

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 text-slate-400">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-violet-400 hover:text-violet-300"
                >
                  Forgot Password?
                </Link>
              </div>

              <Link
                to="/capital-setup"
                className="
                    flex
                    items-center
                    justify-center
                    w-full
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-violet-600
                    to-purple-500
                    font-semibold
                    text-lg
                    hover:opacity-90
                    transition
                  "
              >
                Sign In
              </Link>
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
};

export default Login;

function Input({ label, placeholder, icon, type = "text" }) {
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
        "
      >
        <span className="text-slate-400 text-xl">{icon}</span>

        <input
          type={type}
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

function Feature({ title, text }) {
  return (
    <div className="flex gap-4">
      <div className="h-12 w-12 rounded-xl bg-violet-500/10 border border-violet-500/20" />

      <div>
        <h4 className="font-semibold text-lg">{title}</h4>

        <p className="text-slate-400">{text}</p>
      </div>
    </div>
  );
}
