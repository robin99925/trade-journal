import { Calendar, Filter } from "lucide-react";

const TradeFilters = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4">
      <div className="flex flex-col xl:flex-row gap-3">
        {/* Date Range */}
        <button className="h-11 px-4 border border-slate-200 rounded-xl flex items-center gap-2 bg-white">
          <Calendar size={18} />
          <span>Last 30 Days</span>
        </button>

        {/* Market */}
        <select className="h-11 px-4 border border-slate-200 rounded-xl bg-white">
          <option>All Markets</option>
          <option>NSE</option>
          <option>BSE</option>
        </select>

        {/* Instrument */}
        <select className="h-11 px-4 border border-slate-200 rounded-xl bg-white">
          <option>All Instruments</option>
          <option>Stocks</option>
          <option>Options</option>
          <option>Futures</option>
        </select>

        {/* Strategy */}
        <select className="h-11 px-4 border border-slate-200 rounded-xl bg-white">
          <option>All Strategies</option>
        </select>

        {/* Status */}
        <select className="h-11 px-4 border border-slate-200 rounded-xl bg-white">
          <option>All Status</option>
          <option>Win</option>
          <option>Loss</option>
          <option>Break Even</option>
        </select>

        {/* More Filters */}
        <button className="h-11 px-4 border border-slate-200 rounded-xl flex items-center gap-2">
          <Filter size={18} />
          More Filters
        </button>
      </div>
    </div>
  );
};

export default TradeFilters;
