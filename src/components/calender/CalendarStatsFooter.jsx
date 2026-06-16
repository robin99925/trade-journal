const stats = [
  {
    title: "Total PnL",
    value: "+₹12,650",
    color: "text-green-600",
  },
  {
    title: "Total Trades",
    value: "48",
  },
  {
    title: "Winning Days",
    value: "19",
    sub: "63.3%",
    color: "text-green-600",
  },
  {
    title: "Losing Days",
    value: "9",
    sub: "30.0%",
    color: "text-red-500",
  },
  {
    title: "Breakeven Days",
    value: "2",
    sub: "6.7%",
    color: "text-slate-500",
  },
  {
    title: "Best Day",
    value: "+₹3,120",
    sub: "16 Jun",
    color: "text-green-600",
  },
  {
    title: "Worst Day",
    value: "-₹2,050",
    sub: "27 Jun",
    color: "text-red-500",
  },
];

const CalendarStatsFooter = () => {
  return (
    <div className="space-y-4">
      {/* Stats Grid */}
      <div
        className="
        bg-white
        border
        border-slate-200
        rounded-2xl
        overflow-hidden
        "
      >
        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          2xl:grid-cols-7
          "
        >
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="
              p-5
              border-b
              lg:border-r
              border-slate-100
              last:border-r-0
              "
            >
              <p className="text-sm text-slate-500">{stat.title}</p>

              <h3
                className={`
                mt-2
                text-xl
                font-bold
                ${stat.color || "text-slate-900"}
                `}
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

      {/* Info Card */}
      <div
        className="
        bg-violet-50
        border
        border-violet-100
        rounded-2xl
        p-4
        "
      >
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
