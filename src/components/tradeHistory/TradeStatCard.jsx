import React from "react";

const TradeStatCard = ({ title, value, subtitle, icon, iconBg }) => {
  return (
    <div
      className="
      bg-white
      border
      border-slate-200
      rounded-2xl
      p-5
      hover:shadow-md
      transition-all
      "
    >
      <div className="flex items-start gap-4">
        <div
          className="
          h-14
          w-14
          rounded-2xl
          flex
          items-center
          justify-center
          "
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </div>

        <div className="flex-1">
          <p className="text-sm text-slate-500">{title}</p>

          <h3 className="text-3xl font-bold text-slate-900 mt-1">{value}</h3>

          <p className="text-sm text-green-600 mt-2">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TradeStatCard;
