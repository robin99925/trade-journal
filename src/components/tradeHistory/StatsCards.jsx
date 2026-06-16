import { Briefcase, Trophy, TrendingUp, Target, Star } from "lucide-react";

import TradeStatCard from "./TradeStatCard";

const TradeStatsCards = () => {
  return (
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      2xl:grid-cols-5
      gap-5
      mb-6
      "
    >
      <TradeStatCard
        title="Total Trades"
        value="48"
        subtitle="↑ 12% vs last 30 days"
        icon={<Briefcase size={28} className="text-violet-600" />}
        iconBg="#F3E8FF"
      />

      <TradeStatCard
        title="Win Rate"
        value="64.58%"
        subtitle="↑ 8.24% vs last 30 days"
        icon={<Trophy size={28} className="text-orange-500" />}
        iconBg="#FFF7ED"
      />

      <TradeStatCard
        title="Net PnL"
        value="₹24,850"
        subtitle="↑ 15.6% vs last 30 days"
        icon={<TrendingUp size={28} className="text-green-600" />}
        iconBg="#ECFDF5"
      />

      <TradeStatCard
        title="Avg R:R"
        value="1.82"
        subtitle="↑ 0.18 vs last 30 days"
        icon={<Target size={28} className="text-red-500" />}
        iconBg="#FEF2F2"
      />

      <TradeStatCard
        title="Best Trade"
        value="+₹6,480"
        subtitle="NIFTY 50 • 12 Jun 2025"
        icon={<Star size={28} className="text-blue-500" />}
        iconBg="#EFF6FF"
      />
    </div>
  );
};

export default TradeStatsCards;
