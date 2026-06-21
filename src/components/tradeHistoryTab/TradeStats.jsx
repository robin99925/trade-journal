const TradeStats = ({ trades = [] }) => {
  const totalTrades = trades.length;

  const winningTrades = trades.filter((trade) => trade.status === "WIN");
  const losingTrades = trades.filter((trade) => trade.status === "LOSS");

  const winningCount = winningTrades.length;
  const losingCount = losingTrades.length;

  const totalPnl = trades.reduce((total, trade) => {
    return total + Number(trade.pnl || 0);
  }, 0);

  const avgPnl = totalTrades > 0 ? totalPnl / totalTrades : 0;

  const winRate =
    totalTrades > 0 ? ((winningCount / totalTrades) * 100).toFixed(2) : 0;

  const winningPercentage =
    totalTrades > 0 ? ((winningCount / totalTrades) * 100).toFixed(2) : 0;

  const losingPercentage =
    totalTrades > 0 ? ((losingCount / totalTrades) * 100).toFixed(2) : 0;

  const formatMoney = (amount) => {
    const value = Number(amount || 0);

    return `₹${Math.abs(value).toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    })}`;
  };

  const stats = [
    {
      title: "Total Trades",
      value: totalTrades,
      color: "text-slate-900",
    },
    {
      title: "Winning Trades",
      value: `${winningCount} (${winningPercentage}%)`,
      color: "text-green-600",
    },
    {
      title: "Losing Trades",
      value: `${losingCount} (${losingPercentage}%)`,
      color: "text-red-500",
    },
    {
      title: "Total P&L",
      value: `${totalPnl >= 0 ? "+" : "-"}${formatMoney(totalPnl)}`,
      color: totalPnl >= 0 ? "text-green-600" : "text-red-600",
    },
    {
      title: "Avg. P&L",
      value: `${avgPnl >= 0 ? "+" : "-"}${formatMoney(avgPnl)}`,
      color: avgPnl >= 0 ? "text-green-600" : "text-red-600",
    },
    {
      title: "Win Rate",
      value: `${winRate}%`,
      color: "text-slate-900",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
      <div className="grid grid-cols-2 lg:grid-cols-6">
        {stats.map((item, index) => (
          <div
            key={item.title}
            className={`p-6 lg:p-8 ${
              index !== stats.length - 1 ? "lg:border-r border-slate-100" : ""
            }`}
          >
            <p className="text-sm text-slate-500 mb-2">{item.title}</p>

            <h3
              className={`text-xl lg:text-2xl font-bold whitespace-nowrap ${item.color}`}
            >
              {item.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradeStats;
