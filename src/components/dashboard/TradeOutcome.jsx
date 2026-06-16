import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Wins", value: 68 },
  { name: "Losses", value: 32 },
];

const COLORS = ["#22C55E", "#EF4444"];

const TradeOutcome = () => {
  return (
    <div className="bg-white rounded-3xl border p-6 h-full">
      <h3 className="text-xl font-bold mb-6">Trade Outcome</h3>

      <div className="h-[300px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} innerRadius={70} outerRadius={100} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Wins</span>
          <span>68%</span>
        </div>

        <div className="flex justify-between">
          <span>Losses</span>
          <span>32%</span>
        </div>
      </div>
    </div>
  );
};

export default TradeOutcome;
