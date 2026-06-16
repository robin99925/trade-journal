import { TrendingUp, Target, Trophy, BarChart3 } from "lucide-react";

const stats = [
  {
    label: "Net P&L",
    value: "+₹12,650",
    color: "text-green-600",
  },
  {
    label: "Total Trades",
    value: "48",
    color: "text-slate-900",
  },
  {
    label: "Win Rate",
    value: "64.58%",
    color: "text-green-600",
  },
  {
    label: "Profit Factor",
    value: "1.82",
    color: "text-slate-900",
  },
  {
    label: "Average R:R",
    value: "1.82 : 1",
    color: "text-slate-900",
  },
  {
    label: "Expectancy",
    value: "+₹263",
    color: "text-green-600",
  },
];

const MonthlySummary = () => {
  return (
    <div
      className="
      bg-white
      border
      border-slate-200
      rounded-2xl
      overflow-hidden
      "
    >
      {/* Header */}
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div
            className="
            h-10
            w-10
            rounded-xl
            bg-violet-100
            text-violet-600
            flex
            items-center
            justify-center
            "
          >
            <BarChart3 size={20} />
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">Monthly Summary</h3>

            <p className="text-xs text-slate-500">June 2025 Performance</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="p-5 space-y-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="
            flex
            items-center
            justify-between
            "
          >
            <span className="text-sm text-slate-500">{item.label}</span>

            <span
              className={`
              font-semibold
              ${item.color}
              `}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="
        px-5
        py-4
        bg-slate-50
        border-t
        border-slate-100
        "
      >
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <TrendingUp size={18} className="mx-auto text-green-600" />
            <p className="text-xs text-slate-500 mt-1">Best</p>
            <p className="text-sm font-semibold text-green-600">+₹3.1K</p>
          </div>

          <div className="text-center">
            <Target size={18} className="mx-auto text-violet-600" />
            <p className="text-xs text-slate-500 mt-1">Avg RR</p>
            <p className="text-sm font-semibold">1.82</p>
          </div>

          <div className="text-center">
            <Trophy size={18} className="mx-auto text-amber-500" />
            <p className="text-xs text-slate-500 mt-1">Win %</p>
            <p className="text-sm font-semibold">64.6%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlySummary;
