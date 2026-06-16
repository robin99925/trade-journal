import { Wallet, IndianRupee, Percent, Target } from "lucide-react";

import StatCard from "./StatCard";

const StatsGrid = () => {
  return (
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-4
      gap-6
      "
    >
      <StatCard
        title="Current Capital"
        value="₹1,25,000"
        growth="+12%"
        icon={Wallet}
      />

      <StatCard
        title="Net PnL"
        value="+₹25,000"
        growth="+18%"
        icon={IndianRupee}
      />

      <StatCard title="ROI" value="25%" growth="+6%" icon={Percent} />

      <StatCard title="Win Rate" value="68%" growth="+4%" icon={Target} />
    </div>
  );
};

export default StatsGrid;
