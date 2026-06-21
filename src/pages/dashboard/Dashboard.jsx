import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import StatsGrid from "../../components/dashboard/StatsGrid";
import PerformanceChart from "../../components/dashboard/PerformanceChart";
import TradeOutcome from "../../components/dashboard/TradeOutcome";
import RecentTrades from "../../components/dashboard/RecentTrades";
import StrategyPerformance from "../../components/dashboard/StrategyPerformance";
import { getDashboardData } from "../../services/dashboardService";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const response = await getDashboardData();
      console.log("Dashboard Response:", response); // Debugging line to check the response

      setDashboardData(response.data);
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-6">Loading...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <StatsGrid stats={dashboardData.stats} />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-8">
            <PerformanceChart equityCurve={dashboardData?.equityCurve || []} />
          </div>

          <div className="xl:col-span-4">
            <TradeOutcome tradeOutcome={dashboardData?.tradeOutcome} />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-8">
            <RecentTrades trades={dashboardData?.recentTrades || []} />
          </div>

          <div className="xl:col-span-4">
            <StrategyPerformance
              strategies={dashboardData?.topStrategies || []}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
