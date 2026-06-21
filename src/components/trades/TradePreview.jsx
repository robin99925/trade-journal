const TradePreview = ({ trade }) => {
  console.log("Trade Data in Preview:", trade);
  const entry = Number(trade?.entry) || 0;
  const exit = Number(trade?.exit) || 0;

  const lots = Number(trade?.lots) || 0;
  const lotSize = Number(trade?.lotSize) || 0;

  const quantity = lots * lotSize;
  console.log("Quantity:", quantity);

  let pnlAmount = 0;
  let pnlPercentage = 0;

  pnlAmount = (exit - entry) * quantity;
  pnlPercentage = ((exit - entry) / entry) * 100;

  const hasPrices = entry > 0 && exit > 0;
  const isProfit = pnlAmount >= 0;

  const formatAmount = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(Math.abs(amount));
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 mb-5">Trade Preview</h3>

      <div className="space-y-4">
        {/* Symbol */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">Symbol</span>
          <span className="font-semibold text-slate-900">
            {trade?.symbol || "-"}
          </span>
        </div>

        {/* Trade Type */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">Trade Type</span>

          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              trade?.type === "Short"
                ? "bg-red-100 text-red-600"
                : "bg-emerald-100 text-emerald-600"
            }`}
          >
            {trade?.type || "Long"}
          </span>
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">Quantity</span>

          <span className="font-bold text-slate-900">{quantity || "-"}</span>
        </div>

        <div className="border-t border-slate-100" />

        {/* Entry */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">Entry Price</span>

          <span className="font-bold text-slate-900">
            {entry > 0 ? `₹${formatAmount(entry)}` : "-"}
          </span>
        </div>

        {/* Exit */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">Exit Price</span>

          <span className="font-bold text-slate-900">
            {exit > 0 ? `₹${formatAmount(exit)}` : "-"}
          </span>
        </div>

        <div className="border-t border-slate-100" />

        {/* Price Movement */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">Price Movement</span>

          {hasPrices ? (
            <span
              className={`text-sm font-bold ${
                isProfit ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {isProfit ? "+" : ""}
              {pnlPercentage.toFixed(2)}%
            </span>
          ) : (
            <span className="text-sm font-bold text-slate-400">-</span>
          )}
        </div>

        {/* Profit / Loss */}
        {hasPrices ? (
          <div
            className={`rounded-2xl border p-4 ${
              isProfit
                ? "bg-emerald-50 border-emerald-200"
                : "bg-red-50 border-red-200"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <p
                className={`text-base font-bold ${
                  isProfit ? "text-emerald-700" : "text-red-700"
                }`}
              >
                {isProfit ? "Profit" : "Loss"}
              </p>

              <p
                className={`text-xl sm:text-2xl font-extrabold ${
                  isProfit ? "text-emerald-700" : "text-red-700"
                }`}
              >
                ₹{formatAmount(pnlAmount)}
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 mt-2">
              <p className="text-xs text-slate-500">
                Entry ₹{formatAmount(entry)} → Exit ₹{formatAmount(exit)}
              </p>

              <p
                className={`text-sm font-bold whitespace-nowrap ${
                  isProfit ? "text-emerald-700" : "text-red-700"
                }`}
              >
                {isProfit ? "+" : ""}
                {pnlPercentage.toFixed(2)}%
              </p>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-500">
              Enter entry and exit price to see profit or loss.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradePreview;
