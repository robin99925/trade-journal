import { Filter } from "lucide-react";
import { useState } from "react";

const CalendarToolbar = () => {
  const [view, setView] = useState("month");

  return (
    <div
      className="
      bg-white
      border
      border-slate-200
      rounded-2xl
      p-4
      "
    >
      <div
        className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-4
        "
      >
        {/* Left Side */}
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            className="
            h-11
            px-4
            rounded-xl
            border
            border-slate-200
            bg-white
            text-sm
            font-medium
            focus:outline-none
            focus:ring-2
            focus:ring-violet-500
            "
          >
            <option>All Markets</option>
            <option>NSE</option>
            <option>BSE</option>
            <option>Forex</option>
            <option>Crypto</option>
          </select>

          <button
            className="
            h-11
            px-4
            rounded-xl
            border
            border-slate-200
            flex
            items-center
            justify-center
            gap-2
            hover:bg-slate-50
            transition
            "
          >
            <Filter size={18} />
            Filters
          </button>
        </div>

        {/* Right Side */}
        <div
          className="
          flex
          w-full
          lg:w-auto
          rounded-xl
          border
          border-slate-200
          overflow-hidden
          "
        >
          <button
            onClick={() => setView("month")}
            className={`
              flex-1
              lg:flex-none
              px-5
              h-11
              text-sm
              font-medium
              transition

              ${
                view === "month"
                  ? "bg-violet-600 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }
            `}
          >
            Month
          </button>

          <button
            onClick={() => setView("week")}
            className={`
              flex-1
              lg:flex-none
              px-5
              h-11
              text-sm
              font-medium
              transition

              ${
                view === "week"
                  ? "bg-violet-600 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }
            `}
          >
            Week
          </button>

          <button
            onClick={() => setView("day")}
            className={`
              flex-1
              lg:flex-none
              px-5
              h-11
              text-sm
              font-medium
              transition

              ${
                view === "day"
                  ? "bg-violet-600 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }
            `}
          >
            Day
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarToolbar;
