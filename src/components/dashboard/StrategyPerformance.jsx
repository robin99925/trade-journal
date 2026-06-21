const StrategyPerformance = ({ strategies = [] }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Strategy Performance
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Top performing strategies
          </p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-slate-100 text-sm font-medium">
          {strategies.length} Strategies
        </div>
      </div>

      {strategies.length === 0 ? (
        <div className="py-12 text-center text-slate-400">
          No strategy data available
        </div>
      ) : (
        <div className="space-y-4">
          {strategies.map((item, index) => {
            const strategyName = item?.strategy || "No Strategy";

            const pnl = Number(item?.totalPnl || 0);
            const winRate = Number(item?.winRate || 0);

            return (
              <div
                key={index}
                className="
                border
                border-slate-200
                rounded-2xl
                p-5
                hover:border-violet-200
                hover:shadow-md
                transition-all
                "
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg">
                      {strategyName}
                    </h4>

                    <p className="text-sm text-slate-500 mt-1">
                      {item.trades} Trades
                    </p>
                  </div>

                  <div
                    className={`
                      text-lg
                      font-bold
                      ${pnl >= 0 ? "text-green-600" : "text-red-600"}
                    `}
                  >
                    {pnl >= 0 ? "+" : ""}₹{pnl.toLocaleString()}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-5">
                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-xs text-slate-500">Win Rate</p>

                    <p className="font-bold text-green-600 mt-1">{winRate}%</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-xs text-slate-500">Wins</p>

                    <p className="font-bold mt-1">{item.wins || 0}</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-xs text-slate-500">Losses</p>

                    <p className="font-bold mt-1">{item.losses || 0}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex justify-between text-xs text-slate-500 mb-2">
                    <span>Performance</span>
                    <span>{winRate}%</span>
                  </div>

                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-violet-500
                      to-purple-600
                      transition-all
                      "
                      style={{
                        width: `${Math.min(winRate, 100)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default StrategyPerformance;
