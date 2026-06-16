import { Link } from "react-router-dom";

const VerifyOtp = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="mx-auto min-h-screen max-w-[1600px] grid md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center px-10 lg:px-20">
          <h1 className="text-4xl font-bold mb-10">TradeJournal</h1>

          <span className="inline-flex w-fit px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm mb-8">
            Email Verification
          </span>

          <h2 className="text-5xl xl:text-7xl font-bold leading-tight">
            Verify
            <br />
            <span className="text-violet-500">Your Identity.</span>
          </h2>

          <p className="text-slate-400 text-lg mt-8 max-w-xl">
            Enter the verification code sent to your email to continue password
            recovery.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10">
            <h2 className="text-4xl font-bold text-center">Verify OTP</h2>

            <p className="text-center text-slate-400 mt-3">
              Enter the 6-digit code sent to your email.
            </p>

            <form className="mt-10">
              <div className="flex justify-between gap-3">
                <input
                  maxLength={1}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-900 border border-slate-700 text-center text-xl outline-none focus:border-violet-500"
                />

                <input
                  maxLength={1}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-900 border border-slate-700 text-center text-xl outline-none focus:border-violet-500"
                />

                <input
                  maxLength={1}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-900 border border-slate-700 text-center text-xl outline-none focus:border-violet-500"
                />

                <input
                  maxLength={1}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-900 border border-slate-700 text-center text-xl outline-none focus:border-violet-500"
                />

                <input
                  maxLength={1}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-900 border border-slate-700 text-center text-xl outline-none focus:border-violet-500"
                />

                <input
                  maxLength={1}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-900 border border-slate-700 text-center text-xl outline-none focus:border-violet-500"
                />
              </div>

              <Link
                to="/reset-password"
                className="
                    flex
                    items-center
                    justify-center
                    w-full
                    mt-8
                    py-4
                    rounded-2xl
                    bg-gradient-to-r
                    from-violet-600
                    to-purple-500
                    font-semibold
                    text-white
                  "
              >
                Verify OTP
              </Link>
            </form>

            <div className="text-center mt-6">
              <button className="text-violet-400 hover:text-violet-300">
                Resend OTP
              </button>
            </div>

            <p className="text-center mt-6 text-slate-400">
              <Link to="/forgot-password" className="text-violet-400">
                Back
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
