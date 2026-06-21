import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const PerformanceChart = ({ equityCurve = [] }) => {
  const chartData = equityCurve.map((item) => ({
    month: monthNames[item._id.month - 1],
    capital: item.pnl,
  }));

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 h-full shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Equity Curve</h3>

          <p className="text-sm text-slate-500 mt-1">
            Track your trading growth
          </p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-slate-100 text-sm font-medium">
          Monthly
        </div>
      </div>

      {chartData.length === 0 ? (
        <div className="h-[350px] flex items-center justify-center text-slate-400">
          No performance data available
        </div>
      ) : (
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="equityGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.35} />

                  <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="4 4"
                vertical={false}
                stroke="#E2E8F0"
              />

              <XAxis dataKey="month" tickLine={false} axisLine={false} />

              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `₹${Number(value).toLocaleString()}`}
              />

              <Tooltip
                contentStyle={{
                  borderRadius: "16px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                }}
                formatter={(value) => [
                  `₹${Number(value).toLocaleString()}`,
                  "PnL",
                ]}
              />

              <Area
                type="monotone"
                dataKey="capital"
                stroke="#7C3AED"
                strokeWidth={4}
                fill="url(#equityGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default PerformanceChart;
