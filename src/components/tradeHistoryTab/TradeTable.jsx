import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TradeTable = ({ trades = [], loading = false }) => {
  const navigate = useNavigate();
  const formatDate = (dateValue) => {
    if (!dateValue) return "-";

    const date = new Date(dateValue);

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (dateValue) => {
    if (!dateValue) return "-";

    const date = new Date(dateValue);

    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatMoney = (value) => {
    return Number(value || 0).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    });
  };

  const getSideStyle = (type) => {
    return type === "Long"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };

  const getStatusStyle = (status) => {
    return status === "WIN"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700";
  };

  if (loading) {
    return (
      <div className="p-10 text-center text-slate-500">Loading trades...</div>
    );
  }

  if (!loading && trades.length === 0) {
    return (
      <div className="p-10 text-center text-slate-500">No trades found.</div>
    );
  }

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 text-left text-sm text-slate-500">
              <th className="px-6 py-4">Date & Time</th>
              <th>Symbol</th>
              <th>Side</th>
              <th>Lots</th>
              <th>Entry</th>
              <th>Exit</th>
              <th>P&L</th>
              <th>P&L %</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>

          <tbody>
            {trades.map((trade) => {
              const isProfit = Number(trade.pnl) >= 0;

              return (
                <tr
                  key={trade._id}
                  className="border-b border-slate-100 hover:bg-slate-50"
                >
                  <td className="px-6 py-5">
                    <div className="font-medium">
                      {formatDate(trade.tradeDate)}
                    </div>

                    <div className="text-sm text-slate-500">
                      {formatTime(trade.tradeDate)}
                    </div>
                  </td>

                  <td className="font-medium">{trade.symbol}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getSideStyle(
                        trade.type,
                      )}`}
                    >
                      {trade.type}
                    </span>
                  </td>

                  <td>{trade.lots}</td>

                  <td>₹{formatMoney(trade.entryPrice)}</td>

                  <td>₹{formatMoney(trade.exitPrice)}</td>

                  <td
                    className={
                      isProfit
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {isProfit ? "+" : "-"}₹{formatMoney(trade.pnl)}
                  </td>

                  <td
                    className={
                      Number(trade.pnlPercentage) >= 0
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {Number(trade.pnlPercentage || 0).toFixed(2)}%
                  </td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                        trade.status,
                      )}`}
                    >
                      {trade.status === "WIN" ? "Win" : "Loss"}
                    </span>
                  </td>

                  <td>
                    <button
                      type="button"
                      className="p-2 rounded-lg hover:bg-violet-50"
                      onClick={() => navigate(`/trade-history/${trade._id}`)}
                    >
                      <Eye size={18} className="text-violet-600" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden p-4 space-y-4">
        {trades.map((trade) => {
          const isProfit = Number(trade.pnl) >= 0;

          return (
            <div
              key={trade._id}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4"
            >
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h3 className="font-semibold">{trade.symbol}</h3>

                  <p className="text-sm text-slate-500 mt-1">
                    {formatDate(trade.tradeDate)} •{" "}
                    {formatTime(trade.tradeDate)}
                  </p>
                </div>

                <button
                  type="button"
                  className="p-2 rounded-lg hover:bg-violet-50"
                  onClick={() => navigate(`/trade-history/${trade._id}`)}
                >
                  <Eye size={18} className="text-violet-600" />
                </button>
              </div>

              <div className="flex gap-2 mt-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getSideStyle(
                    trade.type,
                  )}`}
                >
                  {trade.type}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    trade.status,
                  )}`}
                >
                  {trade.status === "WIN" ? "Win" : "Loss"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                <div>
                  <p className="text-slate-500">Entry</p>
                  <p className="font-medium">
                    ₹{formatMoney(trade.entryPrice)}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">Exit</p>
                  <p className="font-medium">₹{formatMoney(trade.exitPrice)}</p>
                </div>

                <div>
                  <p className="text-slate-500">Lots</p>
                  <p className="font-medium">{trade.lots}</p>
                </div>

                <div>
                  <p className="text-slate-500">P&L</p>

                  <p
                    className={
                      isProfit
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {isProfit ? "+" : "-"}₹{formatMoney(trade.pnl)}
                  </p>
                </div>

                <div>
                  <p className="text-slate-500">P&L %</p>

                  <p
                    className={
                      Number(trade.pnlPercentage) >= 0
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {Number(trade.pnlPercentage || 0).toFixed(2)}%
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TradeTable;
