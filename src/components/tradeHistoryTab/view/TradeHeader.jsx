import {
  TrendingUp,
  TrendingDown,
  CalendarDays,
  BarChart3,
} from "lucide-react";

const TradeHeader = ({ trade }) => {
  const isProfit = Number(trade?.pnl || 0) >= 0;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-50 via-white to-emerald-50 opacity-70" />

      <div className="relative p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left */}
          <div className="flex items-start gap-5">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              {trade?.symbol?.charAt(0)}
            </div>

            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">
                {trade.symbol}
              </h1>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium">
                  {trade.type}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    trade.status === "WIN"
                      ? "bg-green-100 text-green-700"
                      : trade.status === "LOSS"
                        ? "bg-red-100 text-red-700"
                        : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {trade.status}
                </span>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-5 mt-5 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <CalendarDays size={16} />
                  {new Date(trade.tradeDate).toLocaleDateString("en-IN")}
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <BarChart3 size={16} />
                  Qty {trade.quantity}
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  Lots {trade.lots}
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  RR {trade.rr}
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:text-right">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-3 ${
                isProfit
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {isProfit ? <TrendingUp size={18} /> : <TrendingDown size={18} />}

              <span className="font-semibold">
                {isProfit ? "Winning Trade" : "Losing Trade"}
              </span>
            </div>

            <h2
              className={`text-4xl lg:text-5xl font-bold ${
                isProfit ? "text-green-600" : "text-red-600"
              }`}
            >
              {isProfit ? "+" : ""}₹
              {Number(trade.pnl || 0).toLocaleString("en-IN")}
            </h2>

            <p
              className={`mt-2 text-lg font-semibold ${
                isProfit ? "text-green-600" : "text-red-600"
              }`}
            >
              {isProfit ? "+" : ""}
              {Number(trade.pnlPercentage || 0).toFixed(2)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeHeader;
