import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const StatCard = ({ title, value, growth, icon: Icon, valueColor = "" }) => {
  const isPositive = Number(growth) >= 0;

  return (
    <div
      className="
      bg-white
      rounded-3xl
      border
      border-slate-200
      p-6
      shadow-sm
      hover:shadow-lg
      hover:-translate-y-1
      transition-all
      duration-300
      "
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 font-medium">{title}</p>

          <h3
            className={`mt-4 text-4xl font-bold tracking-tight ${valueColor}`}
          >
            {value}
          </h3>
        </div>

        <div
          className="
          h-14
          w-14
          rounded-2xl
          bg-violet-50
          flex
          items-center
          justify-center
          "
        >
          <Icon size={24} className="text-violet-600" />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        {growth !== undefined ? (
          <>
            {isPositive ? (
              <TrendingUp size={16} className="text-green-500" />
            ) : (
              <TrendingDown size={16} className="text-red-500" />
            )}

            <span
              className={`font-semibold ${
                isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              {growth}%
            </span>

            <span className="text-slate-400 text-sm">vs starting</span>
          </>
        ) : (
          <span className="text-slate-300">—</span>
        )}
      </div>
    </div>
  );
};

export default StatCard;
