import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import DashboardLayout from "../../layouts/DashboardLayout";
import TradeHeader from "../../components/tradeHistoryTab/view/TradeHeader";
import TradeSummaryCard from "../../components/tradeHistoryTab/view/TradeSummaryCard";
import PsychologyCard from "../../components/tradeHistoryTab/view/PsychologyCard";
import StrategyCard from "../../components/tradeHistoryTab/view/StrategyCard";
import ReviewCard from "../../components/tradeHistoryTab/view/ReviewCard";
import ScreenshotCard from "../../components/tradeHistoryTab/view/ScreenshotCard";

import { getTradeById } from "../../services/tradeService";

const TradeDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [trade, setTrade] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrade();
  }, [id]);

  const fetchTrade = async () => {
    try {
      setLoading(true);

      const response = await getTradeById(id);

      if (response?.success) {
        setTrade(response.data);
      }
    } catch (error) {
      console.error("Trade Details Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="p-10 text-center">Loading Trade...</div>
      </DashboardLayout>
    );
  }

  if (!trade) {
    return (
      <DashboardLayout>
        <div className="p-10 text-center">Trade not found</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-slate-50 p-4 lg:p-8">
        <div className="container mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-6 text-slate-600 hover:text-violet-600"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <TradeHeader trade={trade} />

          <div className="grid lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 space-y-6">
              <PsychologyCard trade={trade} />
              <StrategyCard trade={trade} />
              <ReviewCard trade={trade} />
            </div>

            <div className="space-y-6">
              <TradeSummaryCard trade={trade} />
              <ScreenshotCard trade={trade} />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TradeDetailsPage;
