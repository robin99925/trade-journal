import { useEffect, useMemo, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import TradeStats from "../../components/tradeHistoryTab/TradeStats";
import TradeFilters from "../../components/tradeHistoryTab/TradeFilters";
import TradeTable from "../../components/tradeHistoryTab/TradeTable";
import Pagination from "../../components/tradeHistoryTab/Pagination";

import { getAllTrades } from "../../services/tradeService";

const TradeHistory = () => {
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 20,
    totalPages: 1,
  });

  const fetchTrades = async () => {
    try {
      setLoading(true);

      const response = await getAllTrades({
        page: pagination.page,
        limit: pagination.limit,
      });

      if (response?.success) {
        setTrades(response.trades || []);

        setPagination((prev) => ({
          ...prev,
          ...(response.pagination || {}),
        }));
      }
    } catch (error) {
      console.error("Get Trades Error:", error);
      setTrades([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrades();
  }, [pagination.page]);

  const filteredTrades = useMemo(() => {
    return trades.filter((trade) => {
      const symbol = (trade?.symbol || "").toLowerCase();
      const searchTerm = (search || "").toLowerCase();

      const matchesSearch = symbol.includes(searchTerm);

      if (activeTab === "win") {
        return trade.status === "WIN" && matchesSearch;
      }

      if (activeTab === "loss") {
        return trade.status === "LOSS" && matchesSearch;
      }

      return matchesSearch;
    });
  }, [trades, activeTab, search]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > pagination.totalPages) return;

    setPagination((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50 p-4 lg:p-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900">Trade History</h1>

            <p className="text-slate-500 mt-2">
              View and track all your trades in one place.
            </p>
          </div>

          {/* Stats */}
          <TradeStats trades={trades} />

          {/* Table Section */}
          <div className="mt-6 bg-white rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(15,23,42,0.05)]">
            <TradeFilters
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              search={search}
              setSearch={setSearch}
            />

            <TradeTable trades={filteredTrades} loading={loading} />

            <Pagination
              page={pagination.page}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TradeHistory;
