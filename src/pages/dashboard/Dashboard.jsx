import DashboardLayout from "../../layouts/DashboardLayout";
import StatsGrid from "../../components/dashboard/StatsGrid";
import PerformanceChart from "../../components/dashboard/PerformanceChart";
import TradeOutcome from "../../components/dashboard/TradeOutcome";
import RecentTrades from "../../components/dashboard/RecentTrades";
import StrategyPerformance from "../../components/dashboard/StrategyPerformance";
import QuickActions from "../../components/dashboard/QuickActions";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <StatsGrid />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-8">
            <PerformanceChart />
          </div>

          <div className="xl:col-span-4">
            <TradeOutcome />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-8">
            <RecentTrades />
          </div>

          <div className="xl:col-span-4">
            <StrategyPerformance />
          </div>
        </div>

        <QuickActions />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
