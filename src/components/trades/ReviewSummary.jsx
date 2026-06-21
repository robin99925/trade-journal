const ReviewSummary = ({ trade }) => {
  const entry = Number(trade.entry) || 0;
  const exit = Number(trade.exit) || 0;

  const lots = Number(trade.lots) || 0;
  const lotSize = Number(trade.lotSize) || 0;

  const quantity = lots * lotSize;

  const pnl = (exit - entry) * quantity;

  const investedAmount = entry * quantity;

  const pnlPercent = investedAmount > 0 ? (pnl / investedAmount) * 100 : 0;

  return (
    <div className="bg-white rounded-3xl border p-6">
      <h3 className="text-2xl font-semibold mb-6">👁 Trade Summary</h3>

      <div className="space-y-4">
        <Row label="Symbol" value={trade.symbol || "-"} />

        <Row
          label="Type"
          value={
            <span
              className={
                trade.type === "Put" ? "text-red-600" : "text-green-600"
              }
            >
              {trade.type || "-"}
            </span>
          }
        />

        <Row
          label="Date & Time"
          value={`${trade.date || "-"} ${trade.time || ""}`}
        />

        <Row label="Lots" value={lots || "-"} />

        <Row label="Lot Size" value={lotSize || "-"} />

        <Row label="Quantity" value={quantity || "-"} />

        <hr />

        <Row label="Entry Price" value={entry ? `₹${entry}` : "-"} />

        <Row label="Exit Price" value={exit ? `₹${exit}` : "-"} />

        <hr />

        <Row
          label="P&L"
          value={
            <span
              className={`font-bold ${
                pnl >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {pnl >= 0 ? "+" : ""}₹{pnl.toFixed(2)}
            </span>
          }
        />

        <Row
          label="P&L %"
          value={
            <span
              className={`font-bold ${
                pnlPercent >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {pnlPercent >= 0 ? "+" : ""}
              {pnlPercent.toFixed(2)}%
            </span>
          }
        />

        <Row
          label="Status"
          value={
            <span
              className={`font-bold ${
                pnl > 0
                  ? "text-green-600"
                  : pnl < 0
                    ? "text-red-600"
                    : "text-slate-600"
              }`}
            >
              {pnl > 0 ? "WIN" : pnl < 0 ? "LOSS" : "BE"}
            </span>
          }
        />
      </div>
    </div>
  );
};

const Row = ({ label, value }) => (
  <div className="flex justify-between gap-4">
    <span className="text-slate-600">{label}</span>
    <span className="font-medium text-right">{value}</span>
  </div>
);

export default ReviewSummary;
