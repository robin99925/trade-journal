import {
  Wallet,
  IndianRupee,
  Percent,
  Target,
  Landmark,
  BarChart3,
} from "lucide-react";

import StatCard from "./StatCard";

const StatsGrid = ({ stats = {} }) => {
  return (
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-6
      gap-6
      "
    >
      <StatCard
        title="Starting Capital"
        value={`₹${Number(stats?.startingCapital || 0).toLocaleString()}`}
        icon={Landmark}
      />

      <StatCard
        title="Current Capital"
        value={`₹${Number(stats?.currentCapital || 0).toLocaleString()}`}
        growth={stats?.roi}
        icon={Wallet}
      />

      <StatCard
        title="Net PnL"
        value={`${stats?.netPnl >= 0 ? "+" : ""}₹${Number(
          stats?.netPnl || 0,
        ).toLocaleString()}`}
        growth={stats?.roi}
        valueColor={stats?.netPnl >= 0 ? "text-green-600" : "text-red-600"}
        icon={IndianRupee}
      />

      <StatCard
        title="ROI"
        value={`${stats?.roi || 0}%`}
        growth={stats?.roi}
        icon={Percent}
      />

      <StatCard
        title="Win Rate"
        value={`${stats?.winRate || 0}%`}
        icon={Target}
      />

      <StatCard
        title="Total Trades"
        value={stats?.totalTrades || 0}
        icon={BarChart3}
      />
    </div>
  );
};

export default StatsGrid;
