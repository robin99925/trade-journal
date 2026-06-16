import { Link } from "react-router-dom";
import { HiOutlineLockClosed } from "react-icons/hi";

const ResetPassword = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="mx-auto min-h-screen max-w-[1600px] grid md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center px-10 lg:px-20">
          <h1 className="text-4xl font-bold mb-10">TradeJournal</h1>

          <span className="inline-flex w-fit px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm mb-8">
            Security Update
          </span>

          <h2 className="text-5xl xl:text-7xl font-bold leading-tight">
            Create
            <br />
            <span className="text-violet-500">New Password.</span>
          </h2>

          <p className="text-slate-400 text-lg mt-8 max-w-xl">
            Choose a strong password to keep your trading journal and account
            secure.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10">
            <h2 className="text-4xl font-bold text-center">Reset Password</h2>

            <p className="text-center text-slate-400 mt-3">
              Create a new password for your account.
            </p>

            <form className="mt-10 space-y-6">
              <Input label="New Password" placeholder="Enter new password" />

              <Input label="Confirm Password" placeholder="Confirm password" />

              <button
                type="submit"
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-600
                  to-purple-500
                  font-semibold
                "
              >
                Reset Password
              </button>
            </form>

            <p className="text-center mt-6 text-slate-400">
              <Link to="/" className="text-violet-400 hover:text-violet-300">
                Back To Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block mb-2 text-sm text-slate-300">{label}</label>

      <div className="flex items-center gap-3 px-4 py-4 rounded-2xl border border-slate-700 bg-slate-900/60">
        <HiOutlineLockClosed className="text-slate-400 text-xl" />

        <input
          type="password"
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

export default ResetPassword;
