import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", capital: 100000 },
  { month: "Feb", capital: 112000 },
  { month: "Mar", capital: 109000 },
  { month: "Apr", capital: 126000 },
  { month: "May", capital: 135000 },
  { month: "Jun", capital: 148000 },
];

const PerformanceChart = () => {
  return (
    <div className="bg-white rounded-3xl border p-6">
      <h3 className="text-xl font-bold mb-6">Equity Curve</h3>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="month" />
            <Tooltip />
            <Line dataKey="capital" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
