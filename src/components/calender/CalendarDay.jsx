const CalendarDay = ({ day, pnl, trades, selected = false, today = false }) => {
  const hasTrades = pnl !== null && pnl !== undefined;

  return (
    <div
      className={`
        relative
        bg-white
        border-r
        border-b
        p-1
        md:p-2
        min-h-[65px]
        md:min-h-[80px]
        lg:min-h-[90px]
        overflow-hidden
        hover:bg-slate-50
        transition-colors

        ${selected ? "border-2 border-violet-500" : ""}
      `}
    >
      {/* Date */}
      <div className="flex items-center justify-between">
        <span
          className={`
            text-[10px]
            md:text-xs
            font-semibold

            ${
              today
                ? "h-5 w-5 md:h-6 md:w-6 rounded-full bg-violet-600 text-white flex items-center justify-center"
                : "text-slate-700"
            }
          `}
        >
          {day}
        </span>

        {selected && (
          <span className="h-1.5 w-1.5 rounded-full bg-violet-600" />
        )}
      </div>

      {!hasTrades ? (
        <div className="mt-2">
          <p className="text-[9px] text-slate-400 truncate">No Trades</p>
        </div>
      ) : (
        <div className="mt-2">
          <p
            className={`
              text-[10px]
              md:text-xs
              lg:text-sm
              font-semibold
              truncate

              ${pnl > 0 ? "text-green-600" : "text-red-500"}
            `}
          >
            {pnl > 0 ? "+" : "-"}₹{Math.abs(pnl).toLocaleString()}
          </p>

          <p className="text-[9px] md:text-[10px] text-slate-500 truncate">
            {trades} trades
          </p>
        </div>
      )}
    </div>
  );
};

export default CalendarDay;
