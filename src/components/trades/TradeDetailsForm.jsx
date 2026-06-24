import { CalendarDays, Clock3, TrendingDown, TrendingUp } from "lucide-react";

const symbols = [
  { symbol: "NIFTY 50", lotSize: 65 },
  { symbol: "SENSEX", lotSize: 20 },
  { symbol: "BANKNIFTY", lotSize: 30 },
  { symbol: "FINNIFTY", lotSize: 65 },
  { symbol: "MIDCPNIFTY", lotSize: 120 },
];

const TradeDetailsForm = ({ trade, setTrade, nextStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "symbol") {
      const selectedSymbol = symbols.find((item) => item.symbol === value);

      setTrade((prev) => ({
        ...prev,
        symbol: value,
        lotSize: selectedSymbol?.lotSize || 0,
      }));

      return;
    }

    setTrade((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (!trade.symbol?.trim()) {
      alert("Please select a symbol");
      return;
    }

    if (!trade.date) {
      alert("Please select trade date");
      return;
    }

    if (trade.entry === "" || Number(trade.entry) <= 0) {
      alert("Please enter a valid entry price");
      return;
    }

    if (trade.exit === "" || Number(trade.exit) <= 0) {
      alert("Please enter a valid exit price");
      return;
    }

    if (trade.lots === "" || Number(trade.lots) < 1) {
      alert("Please enter valid lots");
      return;
    }

    nextStep();
  };

  const quantity = (Number(trade.lots) || 0) * (Number(trade.lotSize) || 0);

  return (
    <form
      onSubmit={handleNext}
      className="bg-white rounded-3xl border border-gray-100 p-5 sm:p-6 md:p-8"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Trade Details
        </h2>

        <p className="text-sm sm:text-base text-slate-500 mt-2">
          Enter the basic details of your trade
        </p>
      </div>

      <div className="space-y-6">
        {/* Symbol */}
        <div>
          <label className="block font-semibold text-slate-900 mb-2">
            Symbol
          </label>

          <select
            name="symbol"
            value={trade.symbol}
            onChange={handleChange}
            className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 px-4 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
          >
            <option value="">Select Symbol</option>

            {symbols.map((item) => (
              <option key={item.symbol} value={item.symbol}>
                {item.symbol}
              </option>
            ))}
          </select>
        </div>

        {/* Long / Put */}
        <div>
          <label className="block font-semibold text-slate-900 mb-3">
            Trade Type
          </label>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() =>
                setTrade((prev) => ({
                  ...prev,
                  type: "Long",
                }))
              }
              className={`h-14 rounded-xl border font-semibold flex items-center justify-center gap-2 transition ${
                trade.type === "Long"
                  ? "border-green-500 bg-green-50 text-green-600"
                  : "border-gray-200 text-slate-600 hover:border-green-300"
              }`}
            >
              <TrendingUp size={20} />
              Long
            </button>

            <button
              type="button"
              onClick={() =>
                setTrade((prev) => ({
                  ...prev,
                  type: "Short",
                }))
              }
              className={`h-14 rounded-xl border font-semibold flex items-center justify-center gap-2 transition ${
                trade.type === "Short"
                  ? "border-red-500 bg-red-50 text-red-600"
                  : "border-gray-200 text-slate-600 hover:border-red-300"
              }`}
            >
              <TrendingDown size={20} />
              Short
            </button>
          </div>
        </div>

        {/* Date + Time */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-semibold text-slate-900 mb-2">
              Trade Date
            </label>

            <div className="relative">
              <input
                type="date"
                name="date"
                value={trade.date}
                onChange={handleChange}
                className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 px-4 pr-12 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />

              <CalendarDays
                size={19}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-900 mb-2">
              Trade Time
            </label>

            <div className="relative">
              <input
                type="time"
                name="time"
                value={trade.time}
                onChange={handleChange}
                className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 px-4 pr-12 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />

              <Clock3
                size={19}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Lots + Lot Size + Quantity */}
        <div className="grid sm:grid-cols-3 gap-5">
          <div>
            <label className="block font-semibold text-slate-900 mb-2">
              Lots
            </label>

            <input
              type="number"
              name="lots"
              value={trade.lots}
              onChange={handleChange}
              min="1"
              step="1"
              placeholder="Example: 1"
              className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 px-4 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-900 mb-2">
              Lot Size
            </label>

            <input
              type="number"
              value={trade.lotSize || ""}
              readOnly
              className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 bg-slate-50 px-4 outline-none"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-900 mb-2">
              Quantity
            </label>

            <input
              type="number"
              value={quantity || ""}
              readOnly
              className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 bg-slate-50 px-4 outline-none"
            />
          </div>
        </div>

        {/* Entry + Exit */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block font-semibold text-slate-900 mb-2">
              Entry Price
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                ₹
              </span>

              <input
                type="number"
                name="entry"
                value={trade.entry}
                onChange={handleChange}
                min="0"
                step="0.01"
                placeholder="Enter entry price"
                className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 pl-8 pr-4 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-900 mb-2">
              Exit Price
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                ₹
              </span>

              <input
                type="number"
                name="exit"
                value={trade.exit}
                onChange={handleChange}
                min="0"
                step="0.01"
                placeholder="Enter exit price"
                className="w-full h-12 sm:h-14 rounded-xl border border-gray-200 pl-8 pr-4 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-end mt-10">
        <button
          type="submit"
          className="w-full sm:w-auto min-w-[160px] h-12 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold transition hover:opacity-90 active:scale-[0.98]"
        >
          Next →
        </button>
      </div>
    </form>
  );
};

export default TradeDetailsForm;
