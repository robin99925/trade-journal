const RecentTrades = ({ trades = [] }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Recent Trades</h3>

          <p className="text-sm text-slate-500 mt-1">Latest trading activity</p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-slate-100 text-sm font-medium">
          {trades.length} Trades
        </div>
      </div>

      {trades.length === 0 ? (
        <div className="py-12 text-center text-slate-400">
          No recent trades available
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-4 text-sm font-semibold text-slate-500">
                  Symbol
                </th>

                <th className="text-center py-4 text-sm font-semibold text-slate-500">
                  Side
                </th>

                <th className="text-center py-4 text-sm font-semibold text-slate-500">
                  Result
                </th>

                <th className="text-center py-4 text-sm font-semibold text-slate-500">
                  R:R
                </th>

                <th className="text-right py-4 text-sm font-semibold text-slate-500">
                  PnL
                </th>

                <th className="text-right py-4 text-sm font-semibold text-slate-500">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>
              {trades.map((trade) => (
                <tr
                  key={trade._id}
                  className="
                  border-b
                  border-slate-100
                  hover:bg-slate-50
                  transition
                  "
                >
                  <td className="py-4">
                    <div className="font-semibold text-slate-900">
                      {trade.symbol}
                    </div>
                  </td>

                  <td className="text-center">
                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${
                          trade.side === "BUY"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }
                      `}
                    >
                      {trade.side}
                    </span>
                  </td>

                  <td className="text-center">
                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${
                          trade.status === "WIN"
                            ? "bg-green-100 text-green-700"
                            : trade.status === "LOSS"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                        }
                      `}
                    >
                      {trade.status}
                    </span>
                  </td>

                  <td className="text-center font-medium">{trade.rr}R</td>

                  <td
                    className={`
                      text-right
                      font-bold
                      ${trade.pnl >= 0 ? "text-green-600" : "text-red-600"}
                    `}
                  >
                    {trade.pnl >= 0 ? "+" : ""}₹
                    {Number(trade.pnl || 0).toLocaleString()}
                  </td>

                  <td className="text-right text-slate-500">
                    {new Date(trade.tradeDate).toLocaleDateString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RecentTrades;
