import { TrendingUp } from "lucide-react";

const StatCard = ({ title, value, growth, icon }) => {
  const Icon = icon;

  return (
    <div
      className="
      bg-white
      rounded-3xl
      border
      border-slate-200
      p-6
      shadow-sm
      hover:shadow-md
      transition
      "
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-slate-500 text-sm">{title}</p>

          <h3 className="text-3xl font-bold text-slate-900 mt-3">{value}</h3>
        </div>

        <div
          className="
          h-12
          w-12
          rounded-2xl
          bg-violet-100
          flex
          items-center
          justify-center
          "
        >
          <Icon size={22} className="text-violet-600" />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <TrendingUp size={16} className="text-green-500" />

        <span className="text-green-500 font-medium">{growth}</span>

        <span className="text-slate-400 text-sm">vs last month</span>
      </div>
    </div>
  );
};

export default StatCard;
