import { Filter } from "lucide-react";

const CalendarToolbar = ({ market, setMarket, view, setView }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={market}
            onChange={(e) => setMarket(e.target.value)}
            className="h-11 px-4 rounded-xl border border-slate-200 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <option value="ALL">All Markets</option>
            <option value="INDICES">Indices</option>
            <option value="NSE">NSE</option>
            <option value="BSE">BSE</option>
            <option value="FOREX">Forex</option>
            <option value="CRYPTO">Crypto</option>
          </select>

          <button
            type="button"
            className="h-11 px-4 rounded-xl border border-slate-200 flex items-center justify-center gap-2 hover:bg-slate-50 transition"
          >
            <Filter size={18} />
            Filters
          </button>
        </div>

        <div className="flex w-full lg:w-auto rounded-xl border border-slate-200 overflow-hidden">
          {["month", "week", "day"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setView(item)}
              className={`flex-1 lg:flex-none px-5 h-11 text-sm font-medium transition capitalize ${
                view === item
                  ? "bg-violet-600 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarToolbar;
