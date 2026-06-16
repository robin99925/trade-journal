import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="mx-auto min-h-screen max-w-[1600px] grid md:grid-cols-2">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center px-10 lg:px-20">
          <h1 className="text-4xl font-bold mb-10">TradeJournal</h1>

          <span className="inline-flex w-fit px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm mb-8">
            Password Recovery
          </span>

          <h2 className="text-5xl xl:text-7xl font-bold leading-tight">
            Get Back
            <br />
            <span className="text-violet-500">Into Trading.</span>
          </h2>

          <p className="text-slate-400 text-lg mt-8 max-w-xl">
            Enter your email address and we'll send you a verification code to
            reset your password.
          </p>
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
            <h2 className="text-4xl font-bold text-center">Forgot Password</h2>

            <p className="text-center text-slate-400 mt-3">
              Enter your registered email.
            </p>

            <form className="mt-10 space-y-6">
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Email Address
                </label>

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
                  <HiOutlineMail className="text-slate-400 text-xl" />

                  <input
                    type="email"
                    placeholder="Enter your email"
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
              <Link
                to="/verify-otp"
                className="block
                    w-full
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-violet-600
                    to-purple-500
                    font-semibold
                    text-lg
                    text-center
                  "
              >
                Send OTP
              </Link>
            </form>

            <p className="text-center mt-8 text-slate-400">
              Remember your password?{" "}
              <Link to="/" className="text-violet-400 hover:text-violet-300">
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
