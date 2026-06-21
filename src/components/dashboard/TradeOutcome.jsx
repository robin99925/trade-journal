import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#22C55E", "#EF4444", "#F59E0B"];

const TradeOutcome = ({ tradeOutcome = {} }) => {
  const wins = tradeOutcome?.wins || 0;
  const losses = tradeOutcome?.losses || 0;
  const breakeven = tradeOutcome?.breakeven || 0;

  const totalTrades = wins + losses + breakeven;

  const data = [
    {
      name: "Wins",
      value: wins,
    },
    {
      name: "Losses",
      value: losses,
    },
    {
      name: "Breakeven",
      value: breakeven,
    },
  ].filter((item) => item.value > 0);

  const winRate = totalTrades > 0 ? ((wins / totalTrades) * 100).toFixed(1) : 0;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 h-full shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold">Trade Outcome</h3>

          <p className="text-sm text-slate-500 mt-1">
            Win vs Loss Distribution
          </p>
        </div>

        <div className="px-3 py-2 rounded-xl bg-green-50 text-green-600 text-sm font-semibold">
          {winRate}% Win Rate
        </div>
      </div>

      <div className="h-[260px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={75}
              outerRadius={105}
              paddingAngle={4}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div
          className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          pointer-events-none
          "
        >
          <p className="text-4xl font-bold text-slate-900">{totalTrades}</p>

          <p className="text-sm text-slate-500">Total Trades</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="bg-green-50 rounded-2xl p-4">
          <p className="text-xs text-slate-500">Wins</p>

          <p className="text-xl font-bold text-green-600 mt-1">{wins}</p>
        </div>

        <div className="bg-red-50 rounded-2xl p-4">
          <p className="text-xs text-slate-500">Losses</p>

          <p className="text-xl font-bold text-red-600 mt-1">{losses}</p>
        </div>

        <div className="bg-yellow-50 rounded-2xl p-4">
          <p className="text-xs text-slate-500">Breakeven</p>

          <p className="text-xl font-bold text-yellow-600 mt-1">{breakeven}</p>
        </div>
      </div>
    </div>
  );
};

export default TradeOutcome;
