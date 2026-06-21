import { BarChart3 } from "lucide-react";

const Row = ({ label, value, valueClass = "" }) => (
  <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-b-0">
    <span className="text-sm text-slate-500">{label}</span>

    <span className={`font-semibold text-slate-900 ${valueClass}`}>
      {value}
    </span>
  </div>
);

const TradeSummaryCard = ({ trade }) => {
  const isProfit = Number(trade?.pnl || 0) >= 0;

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden sticky top-6">
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-violet-100 flex items-center justify-center">
          <BarChart3 size={18} className="text-violet-600" />
        </div>

        <div>
          <h3 className="font-bold text-slate-900">Trade Summary</h3>
          <p className="text-xs text-slate-500">Complete trade statistics</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <Row label="Symbol" value={trade.symbol || "-"} />
        <Row label="Type" value={trade.type || "-"} />
        <Row
          label="Trade Date"
          value={
            trade.tradeDate
              ? new Date(trade.tradeDate).toLocaleDateString("en-IN")
              : "-"
          }
        />

        <Row
          label="Entry Price"
          value={`₹${Number(trade.entryPrice || 0).toLocaleString("en-IN")}`}
        />

        <Row
          label="Exit Price"
          value={`₹${Number(trade.exitPrice || 0).toLocaleString("en-IN")}`}
        />

        <Row label="Lots" value={trade.lots || 0} />

        <Row
          label="Lot Size"
          value={Number(trade.lotSize || 0).toLocaleString("en-IN")}
        />

        <Row
          label="Quantity"
          value={Number(trade.quantity || 0).toLocaleString("en-IN")}
        />

        <Row label="R:R Ratio" value={trade.rr || 0} />

        {/* PnL */}
        <Row
          label="P&L"
          value={`₹${Number(trade.pnl || 0).toLocaleString("en-IN")}`}
          valueClass={
            isProfit ? "text-green-600 font-bold" : "text-red-600 font-bold"
          }
        />

        <Row
          label="P&L %"
          value={`${Number(trade.pnlPercentage || 0).toFixed(2)}%`}
          valueClass={
            isProfit ? "text-green-600 font-bold" : "text-red-600 font-bold"
          }
        />

        {/* Status */}
        <div className="flex items-center justify-between pt-4">
          <span className="text-sm text-slate-500">Status</span>

          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              trade.status === "WIN"
                ? "bg-green-100 text-green-700"
                : trade.status === "LOSS"
                  ? "bg-red-100 text-red-700"
                  : "bg-slate-100 text-slate-700"
            }`}
          >
            {trade.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TradeSummaryCard;
