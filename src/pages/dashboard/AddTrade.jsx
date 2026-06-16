import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import { LineChart, Tag, FileText, Save } from "lucide-react";

const AddTrade = () => {
  const [tradeType, setTradeType] = useState("Option");
  const [direction, setDirection] = useState("Buy");
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* ================= HEADER ================= */}

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Icon */}
          <div
            className="
      w-12
      h-12
      sm:w-14
      sm:h-14
      rounded-2xl
      bg-gradient-to-br
      from-violet-600
      to-violet-900
      flex
      items-center
      justify-center
      shadow-lg
      shadow-violet-500/20
      shrink-0
    "
          >
            <LineChart className="text-white w-5 h-5 sm:w-[26px] sm:h-[26px]" />
          </div>

          {/* Title */}
          <div className="min-w-0">
            <h1
              className="
        text-2xl
        sm:text-3xl
        lg:text-4xl
        font-bold
        text-white
        leading-tight
        break-words
      "
            >
              Add Trade
            </h1>

            <p
              className="
        mt-1
        text-sm
        sm:text-base
        text-slate-400
      "
            >
              Record your trade details
            </p>
          </div>
        </div>

        {/* ================= LAYOUT ================= */}

        <div className="grid xl:grid-cols-12 gap-6">
          {/* ================================= LEFT ================================= */}

          <div className="xl:col-span-9 space-y-6">
            {/* ================= TRADE DETAILS ================= */}

            <div
              className="
              rounded-3xl
              border
              border-slate-800
              bg-[#070B16]
              p-7
              shadow-[0_0_40px_rgba(59,130,246,.08)]
              "
            >
              {/* Heading */}

              <div className="flex items-center gap-3 mb-8">
                <Tag className="text-violet-400" size={22} />

                <h2 className="text-2xl font-semibold text-white">
                  1. Trade Details
                </h2>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Trade Type */}

                <div>
                  <label className="block text-slate-400 mb-4">
                    Trade Type
                  </label>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setTradeType("Option")}
                      className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300
      ${
        tradeType === "Option"
          ? "bg-violet-600 text-white"
          : "bg-slate-900 border border-slate-700 text-slate-300 hover:border-violet-500"
      }`}
                    >
                      Option
                    </button>

                    <button
                      type="button"
                      onClick={() => setTradeType("Crypto")}
                      className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300
      ${
        tradeType === "Crypto"
          ? "bg-violet-600 text-white"
          : "bg-slate-900 border border-slate-700 text-slate-300 hover:border-violet-500"
      }`}
                    >
                      Crypto
                    </button>
                  </div>
                </div>

                {/* Direction */}

                <div>
                  <label className="block text-slate-400 mb-4">Direction</label>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setDirection("Buy")}
                      className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300
      ${
        direction === "Buy"
          ? "bg-emerald-600 text-white"
          : "bg-slate-900 border border-slate-700 text-slate-300 hover:border-emerald-500"
      }`}
                    >
                      Buy
                    </button>

                    <button
                      type="button"
                      onClick={() => setDirection("Sell")}
                      className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300
      ${
        direction === "Sell"
          ? "bg-rose-600 text-white"
          : "bg-slate-900 border border-slate-700 text-slate-300 hover:border-rose-500"
      }`}
                    >
                      Sell
                    </button>
                  </div>
                </div>
                {/* Symbol */}

                <div>
                  <label className="block text-slate-400 mb-4">Symbol</label>

                  <input
                    defaultValue="NIFTY 23 MAY 22000 CE"
                    className="
                    w-full
                    h-12
                    rounded-xl
                    border
                    border-slate-700
                    bg-slate-950
                    px-4
                    text-white
                    outline-none
                    focus:border-violet-500
                    "
                  />
                </div>
              </div>
            </div>

            {/* ================= NEXT PART ================= */}

            {/* ================= ENTRY & EXIT ================= */}

            <div
              className="
  rounded-3xl
  border
  border-slate-800
  bg-[#070B16]
  p-7
  shadow-[0_0_40px_rgba(59,130,246,.08)]
  "
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  📈
                </div>

                <h2 className="text-2xl font-semibold text-white">
                  2. Entry & Exit Details
                </h2>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Index */}

                <div>
                  <label className="block text-slate-400 mb-3">Index</label>

                  <select
                    className="
        w-full
        h-12
        rounded-xl
        border
        border-slate-700
        bg-slate-950
        px-4
        text-white
        outline-none
        focus:border-violet-500
      "
                  >
                    <option>NIFTY (65)</option>
                    <option>BANKNIFTY (35)</option>
                    <option>FINNIFTY (40)</option>
                    <option>MIDCPNIFTY (120)</option>
                    <option>SENSEX (20)</option>
                    <option>STOCK OPTION</option>
                  </select>
                </div>

                {/* Quantity */}

                <div>
                  <label className="block text-slate-400 mb-3">Quantity</label>

                  <div className="flex gap-2">
                    <select
                      className="
          w-28
          h-12
          rounded-xl
          border
          border-slate-700
          bg-slate-950
          px-3
          text-white
          outline-none
          focus:border-violet-500
        "
                    >
                      <option>Lot</option>
                      <option>Qty</option>
                    </select>

                    <input
                      type="number"
                      placeholder="1"
                      className="
          flex-1
          h-12
          rounded-xl
          border
          border-slate-700
          bg-slate-950
          px-4
          text-white
          outline-none
          focus:border-violet-500
        "
                    />
                  </div>

                  <p className="text-xs text-violet-400 mt-2">
                    1 Lot = <span className="font-semibold">65 Qty</span>
                  </p>
                </div>

                {/* Entry Price */}

                <div>
                  <label className="block text-slate-400 mb-3">
                    Entry Price
                  </label>

                  <input
                    type="number"
                    placeholder="185.50"
                    className="
        w-full
        h-12
        rounded-xl
        border
        border-slate-700
        bg-slate-950
        px-4
        text-white
        outline-none
        focus:border-violet-500
      "
                  />
                </div>

                {/* Exit Price */}

                <div>
                  <label className="block text-slate-400 mb-3">
                    Exit Price
                  </label>

                  <input
                    type="number"
                    placeholder="210.80"
                    className="
        w-full
        h-12
        rounded-xl
        border
        border-slate-700
        bg-slate-950
        px-4
        text-white
        outline-none
        focus:border-violet-500
      "
                  />
                </div>

                {/* Entry Date */}

                <div>
                  <label className="block text-slate-400 mb-3">
                    Entry Date
                  </label>

                  <input
                    type="date"
                    className="
        w-full
        h-12
        rounded-xl
        border
        border-slate-700
        bg-slate-950
        px-4
        text-white
        outline-none
        focus:border-violet-500
      "
                  />
                </div>

                {/* Entry Time */}

                <div>
                  <label className="block text-slate-400 mb-3">
                    Entry Time
                  </label>

                  <input
                    type="time"
                    className="
        w-full
        h-12
        rounded-xl
        border
        border-slate-700
        bg-slate-950
        px-4
        text-white
        outline-none
        focus:border-violet-500
      "
                  />
                </div>

                {/* Exit Date */}

                <div>
                  <label className="block text-slate-400 mb-3">Exit Date</label>

                  <input
                    type="date"
                    className="
        w-full
        h-12
        rounded-xl
        border
        border-slate-700
        bg-slate-950
        px-4
        text-white
        outline-none
        focus:border-violet-500
      "
                  />
                </div>

                {/* Exit Time */}

                <div>
                  <label className="block text-slate-400 mb-3">Exit Time</label>

                  <input
                    type="time"
                    className="
        w-full
        h-12
        rounded-xl
        border
        border-slate-700
        bg-slate-950
        px-4
        text-white
        outline-none
        focus:border-violet-500
      "
                  />
                </div>
              </div>
            </div>
            {/* ================= STRATEGY & SETUP ================= */}

            <div
              className="
  rounded-3xl
  border
  border-slate-800
  bg-[#070B16]
  p-7
  shadow-[0_0_40px_rgba(59,130,246,.08)]
  "
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  🎯
                </div>

                <h2 className="text-2xl font-semibold text-white">
                  3. Strategy & Setup
                </h2>
              </div>

              <label className="block text-slate-400 mb-4">
                Why did you take this trade?
              </label>

              <textarea
                rows={5}
                placeholder="Example : Breakout above resistance with volume confirmation..."
                className="
      w-full
      rounded-2xl
      border
      border-slate-700
      bg-slate-950
      px-5
      py-4
      text-white
      resize-none
      outline-none
      focus:border-violet-500
    "
              />

              <p className="text-right text-slate-500 text-sm mt-2">
                0 / 500 Characters
              </p>
            </div>

            {/* ================= TRADE NOTES ================= */}

            <div
              className="
  rounded-3xl
  border
  border-slate-800
  bg-[#070B16]
  p-7
  shadow-[0_0_40px_rgba(59,130,246,.08)]
  "
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  📝
                </div>

                <h2 className="text-2xl font-semibold text-white">
                  4. Trade Notes
                </h2>
              </div>

              <textarea
                rows={6}
                placeholder="Write your observations, mistakes, confidence level, emotions..."
                className="
      w-full
      rounded-2xl
      border
      border-slate-700
      bg-slate-950
      px-5
      py-4
      text-white
      resize-none
      outline-none
      focus:border-violet-500
    "
              />

              <p className="text-right text-slate-500 text-sm mt-2">
                0 / 1000 Characters
              </p>
            </div>

            {/* ================= SCREENSHOT ================= */}

            {/* <div
              className="
  rounded-3xl
  border
  border-slate-800
  bg-[#070B16]
  p-7
  shadow-[0_0_40px_rgba(59,130,246,.08)]
  "
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  📷
                </div>

                <h2 className="text-2xl font-semibold text-white">
                  5. Trade Screenshot
                </h2>
              </div>

              <label
                className="
      border-2
      border-dashed
      border-slate-700
      rounded-2xl
      h-72
      flex
      flex-col
      items-center
      justify-center
      cursor-pointer
      hover:border-violet-500
      transition
    "
              >
                <div className="text-6xl mb-4">📤</div>

                <h3 className="text-white text-xl font-semibold">
                  Upload Screenshot
                </h3>

                <p className="text-slate-400 mt-2">
                  Drag & Drop or Click to Upload
                </p>

                <p className="text-slate-500 text-sm mt-1">
                  PNG, JPG (Max 5MB)
                </p>

                <input type="file" className="hidden" />
              </label>
            </div> */}
          </div>

          {/* ================= RIGHT SUMMARY ================= */}

          <div className="xl:col-span-3">
            <div
              className="
              sticky
              top-24
              rounded-3xl
              border
              border-slate-800
              bg-[#070B16]
              p-6
              shadow-[0_0_40px_rgba(59,130,246,.08)]
              "
            >
              <div className="flex items-center gap-3 mb-8">
                <FileText size={22} className="text-violet-400" />

                <h2 className="text-2xl font-semibold text-white">
                  Trade Summary
                </h2>
              </div>

              <div className="space-y-5">
                <div className="flex justify-between">
                  <span className="text-slate-400">Status</span>

                  <span
                    className="
                    px-4
                    py-1
                    rounded-lg
                    bg-emerald-500/20
                    text-emerald-400
                    font-semibold
                    "
                  >
                    WIN
                  </span>
                </div>

                <hr className="border-slate-800" />

                <div className="flex justify-between">
                  <span className="text-slate-400">Entry Price</span>

                  <span className="text-white">₹185.50</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Exit Price</span>

                  <span className="text-white">₹210.80</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Quantity</span>

                  <span className="text-white">50</span>
                </div>

                <hr className="border-slate-800" />

                <div className="flex justify-between">
                  <span className="text-slate-400">Total Invested</span>

                  <span className="text-white">₹9,275</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Total Returns</span>

                  <span className="text-white">₹10,540</span>
                </div>

                <hr className="border-slate-800" />

                <div>
                  <p className="text-slate-400 mb-2">Profit / Loss</p>

                  <div className="flex justify-between items-center">
                    <h2 className="text-4xl font-bold text-emerald-400">
                      +₹1,265
                    </h2>

                    <span
                      className="
                      px-3
                      py-2
                      rounded-lg
                      bg-emerald-500/20
                      text-emerald-400
                      "
                    >
                      +13.64%
                    </span>
                  </div>
                </div>

                <button
                  className="
                  mt-8
                  w-full
                  h-14
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-purple-500
                  text-white
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  "
                >
                  <Save size={20} />
                  Save Trade
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AddTrade;
