import DashboardLayout from "../../layouts/DashboardLayout";

import TradeTabs from "../../components/tradeHistory/TradeTabs";
import TradeFilters from "../../components/tradeHistory/TradeFilters";
import TradeStatsCards from "../../components/tradeHistory/StatsCards";
import TradesTable from "../../components/tradeHistory/TradeTable";
import Pagination from "../../components/tradeHistory/Pagination";

const TradeHistory = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Tabs */}
        <TradeTabs />

        {/* Filters */}
        <TradeFilters />

        {/* Stats Cards */}
        <TradeStatsCards />

        {/* Table + Pagination */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <TradesTable />
          <Pagination />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TradeHistory;
