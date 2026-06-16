const CapitalSetup = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="mx-auto max-w-[1600px] min-h-screen grid md:grid-cols-2">
        {/* Left Section */}
        <div className="hidden md:flex flex-col justify-center px-10 lg:px-20">
          <span className="inline-flex w-fit px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm mb-8">
            Trading Profile Setup
          </span>

          <h1 className="text-5xl xl:text-7xl font-bold leading-tight">
            Start Tracking
            <br />
            <span className="text-violet-500">Your Capital.</span>
          </h1>

          <p className="text-slate-400 text-lg mt-8 max-w-xl">
            Configure your trading profile to unlock ROI tracking, performance
            analytics and advanced reports.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
            <h2 className="text-3xl font-bold">Welcome 👋</h2>

            <p className="text-slate-400 mt-2">
              Let's set up your trading account.
            </p>

            <form className="mt-8 space-y-6">
              {/* Capital */}
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Starting Capital
                </label>

                <input
                  type="number"
                  placeholder="100000"
                  className="
                    w-full
                    px-4
                    py-4
                    rounded-2xl
                    bg-slate-900
                    border
                    border-slate-700
                    outline-none
                  "
                />
              </div>

              {/* Currency */}
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Currency
                </label>

                <select
                  className="
                    w-full
                    px-4
                    py-4
                    rounded-2xl
                    bg-slate-900
                    border
                    border-slate-700
                  "
                >
                  <option>INR</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>

              {/* Markets */}
              <div>
                <label className="block mb-3 text-sm text-slate-300">
                  Markets
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <label className="flex gap-2">
                    <input type="checkbox" />
                    Crypto
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    Forex
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    Stocks
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    Futures
                  </label>

                  <label className="flex gap-2">
                    <input type="checkbox" />
                    Options
                  </label>
                </div>
              </div>

              {/* Experience */}
              <div>
                <label className="block mb-3 text-sm text-slate-300">
                  Trading Experience
                </label>

                <div className="space-y-2">
                  <label className="flex gap-2">
                    <input type="radio" name="exp" />
                    Beginner
                  </label>

                  <label className="flex gap-2">
                    <input type="radio" name="exp" />
                    Intermediate
                  </label>

                  <label className="flex gap-2">
                    <input type="radio" name="exp" />
                    Advanced
                  </label>
                </div>
              </div>

              <button
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
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapitalSetup;
