import { TrendingUp, Target, Trophy, BarChart3 } from "lucide-react";

const formatMoney = (amount = 0) => {
  const value = Number(amount || 0);

  return `${value >= 0 ? "+" : "-"}₹${Math.abs(value).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;
};

const MonthlySummary = ({ calendarData, loading }) => {
  const days = Array.isArray(calendarData?.days) ? calendarData.days : [];

  // Total P&L
  const netPnl = days.reduce((total, day) => {
    return total + Number(day?.pnl || 0);
  }, 0);

  // Total trades
  const totalTrades = days.reduce((total, day) => {
    return total + Number(day?.tradeCount || 0);
  }, 0);

  // Profit / loss days
  const profitDays = days.filter((day) => Number(day?.pnl) > 0);
  const lossDays = days.filter((day) => Number(day?.pnl) < 0);

  // Winning and losing trades
  // Calendar API me per day tradeCount aa raha hai,
  // isliye currently positive day ke saare trades winning maan rahe hain.
  const winningTrades = profitDays.reduce((total, day) => {
    return total + Number(day?.tradeCount || 0);
  }, 0);

  const losingTrades = lossDays.reduce((total, day) => {
    return total + Number(day?.tradeCount || 0);
  }, 0);

  // Win rate
  const winRate =
    totalTrades > 0 ? ((winningTrades / totalTrades) * 100).toFixed(2) : 0;

  // Gross profit / gross loss
  const grossProfit = profitDays.reduce((total, day) => {
    return total + Number(day?.pnl || 0);
  }, 0);

  const grossLoss = Math.abs(
    lossDays.reduce((total, day) => {
      return total + Number(day?.pnl || 0);
    }, 0),
  );

  // Profit Factor
  const profitFactor =
    grossLoss > 0
      ? (grossProfit / grossLoss).toFixed(2)
      : grossProfit > 0
        ? "∞"
        : "0.00";

  // Average P&L
  const averagePnl = totalTrades > 0 ? netPnl / totalTrades : 0;

  // Best day
  const bestDay =
    days.length > 0 ? Math.max(...days.map((day) => Number(day?.pnl || 0))) : 0;

  // Average RR API me nahi aa raha, default 0
  const averageRR = "0.00";

  const monthName = new Date(
    Number(calendarData?.year || new Date().getFullYear()),
    Number(calendarData?.month || new Date().getMonth() + 1) - 1,
  ).toLocaleString("en-IN", {
    month: "long",
    year: "numeric",
  });

  const stats = [
    {
      label: "Net P&L",
      value: formatMoney(netPnl),
      color: netPnl >= 0 ? "text-green-600" : "text-red-500",
    },
    {
      label: "Total Trades",
      value: totalTrades,
      color: "text-slate-900",
    },
    {
      label: "Win Rate",
      value: `${winRate}%`,
      color: Number(winRate) >= 50 ? "text-green-600" : "text-red-500",
    },
    {
      label: "Profit Factor",
      value: profitFactor,
      color: "text-slate-900",
    },
    {
      label: "Average R:R",
      value: `${averageRR} : 1`,
      color: "text-slate-900",
    },
    {
      label: "Expectancy",
      value: formatMoney(averagePnl),
      color: averagePnl >= 0 ? "text-green-600" : "text-red-500",
    },
  ];

  if (loading) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="p-5">
          <p className="text-sm text-slate-500">Loading monthly summary...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center">
            <BarChart3 size={20} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">Monthly Summary</h3>

            <p className="text-xs text-slate-500">{monthName} Performance</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="p-5 space-y-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between gap-3"
          >
            <span className="text-sm text-slate-500">{item.label}</span>

            <span className={`font-semibold text-right ${item.color}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 py-4 bg-slate-50 border-t border-slate-100">
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <TrendingUp size={18} className="mx-auto text-green-600" />

            <p className="text-xs text-slate-500 mt-1">Best Day</p>

            <p
              className={`text-sm font-semibold ${
                bestDay >= 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {formatMoney(bestDay)}
            </p>
          </div>

          <div className="text-center">
            <Target size={18} className="mx-auto text-violet-600" />

            <p className="text-xs text-slate-500 mt-1">Profit Factor</p>

            <p className="text-sm font-semibold">{profitFactor}</p>
          </div>

          <div className="text-center">
            <Trophy size={18} className="mx-auto text-amber-500" />

            <p className="text-xs text-slate-500 mt-1">Win %</p>

            <p
              className={`text-sm font-semibold ${
                Number(winRate) >= 50 ? "text-green-600" : "text-red-500"
              }`}
            >
              {winRate}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlySummary;
