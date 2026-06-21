const formatMoney = (amount = 0) => {
  const value = Number(amount || 0);

  return `${value >= 0 ? "+" : "-"}₹${Math.abs(value).toLocaleString("en-IN", {
    maximumFractionDigits: 2,
  })}`;
};

const CalendarStatsFooter = ({ days = [], month, year }) => {
  const totalPnl = days.reduce((sum, day) => sum + Number(day.pnl || 0), 0);

  const totalTrades = days.reduce(
    (sum, day) => sum + Number(day.tradeCount || 0),
    0,
  );

  const winningDays = days.filter((day) => Number(day.pnl) > 0);
  const losingDays = days.filter((day) => Number(day.pnl) < 0);
  const breakevenDays = days.filter((day) => Number(day.pnl) === 0);

  const totalActiveDays = days.length;

  const winningDaysPercent =
    totalActiveDays > 0
      ? ((winningDays.length / totalActiveDays) * 100).toFixed(1)
      : "0.0";

  const losingDaysPercent =
    totalActiveDays > 0
      ? ((losingDays.length / totalActiveDays) * 100).toFixed(1)
      : "0.0";

  const breakevenDaysPercent =
    totalActiveDays > 0
      ? ((breakevenDays.length / totalActiveDays) * 100).toFixed(1)
      : "0.0";

  const bestDay =
    winningDays.length > 0
      ? winningDays.reduce((best, day) =>
          Number(day.pnl) > Number(best.pnl) ? day : best,
        )
      : null;

  const worstDay =
    losingDays.length > 0
      ? losingDays.reduce((worst, day) =>
          Number(day.pnl) < Number(worst.pnl) ? day : worst,
        )
      : null;

  const formatDayDate = (dateString) => {
    if (!dateString) return "-";

    const date = new Date(`${dateString}T00:00:00`);

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    });
  };

  const stats = [
    {
      title: "Total PnL",
      value: formatMoney(totalPnl),
      color:
        totalPnl > 0
          ? "text-green-600"
          : totalPnl < 0
            ? "text-red-500"
            : "text-slate-500",
    },
    {
      title: "Total Trades",
      value: totalTrades.toLocaleString("en-IN"),
      color: "text-slate-900",
    },
    {
      title: "Winning Days",
      value: winningDays.length.toString(),
      sub: `${winningDaysPercent}%`,
      color: "text-green-600",
    },
    {
      title: "Losing Days",
      value: losingDays.length.toString(),
      sub: `${losingDaysPercent}%`,
      color: "text-red-500",
    },
    {
      title: "Breakeven Days",
      value: breakevenDays.length.toString(),
      sub: `${breakevenDaysPercent}%`,
      color: "text-slate-500",
    },
    {
      title: "Best Day",
      value: bestDay ? formatMoney(bestDay.pnl) : "-",
      sub: bestDay ? formatDayDate(bestDay.date) : "No profit day",
      color: "text-green-600",
    },
    {
      title: "Worst Day",
      value: worstDay ? formatMoney(worstDay.pnl) : "-",
      sub: worstDay ? formatDayDate(worstDay.date) : "No loss day",
      color: "text-red-500",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-7">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="p-5 border-b lg:border-r border-slate-100 last:border-r-0"
            >
              <p className="text-sm text-slate-500">{stat.title}</p>

              <h3
                className={`mt-2 text-xl font-bold ${
                  stat.color || "text-slate-900"
                }`}
              >
                {stat.value}
              </h3>

              {stat.sub && (
                <p className="mt-1 text-xs text-slate-400">{stat.sub}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-violet-50 border border-violet-100 rounded-2xl p-4">
        <p className="text-sm text-slate-600 leading-6">
          📈 Calendar analytics help identify profitable trading days,
          consistency patterns, and areas where your trading discipline can
          improve.
        </p>
      </div>
    </div>
  );
};

export default CalendarStatsFooter;
