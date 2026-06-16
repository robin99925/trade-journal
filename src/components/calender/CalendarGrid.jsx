import { ChevronLeft, ChevronRight } from "lucide-react";
import CalendarDay from "./CalendarDay";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const calendarDays = [
  { day: 1, pnl: null, trades: 0 },
  { day: 2, pnl: 1250, trades: 3 },
  { day: 3, pnl: -850, trades: 2 },
  { day: 4, pnl: 2450, trades: 4 },
  { day: 5, pnl: null, trades: 0 },
  { day: 6, pnl: -1150, trades: 3 },
  { day: 7, pnl: 950, trades: 2 },

  { day: 8, pnl: null, trades: 0 },
  { day: 9, pnl: 2300, trades: 5 },
  { day: 10, pnl: -620, trades: 2 },
  { day: 11, pnl: 1780, trades: 3 },
  { day: 12, pnl: 1050, trades: 2 },
  { day: 13, pnl: -1420, trades: 4 },
  { day: 14, pnl: null, trades: 0 },

  { day: 15, pnl: null, trades: 0 },
  { day: 16, pnl: 3120, trades: 6, selected: true },
  { day: 17, pnl: -930, trades: 2 },
  { day: 18, pnl: 2610, trades: 4 },
  { day: 19, pnl: null, trades: 0 },
  { day: 20, pnl: -820, trades: 2 },
  { day: 21, pnl: 1260, trades: 2 },

  { day: 22, pnl: null, trades: 0 },
  { day: 23, pnl: -1340, trades: 3 },
  { day: 24, pnl: 1560, trades: 2 },
  { day: 25, pnl: 2200, trades: 3 },
  { day: 26, pnl: null, trades: 0 },
  { day: 27, pnl: -2050, trades: 4 },
  { day: 28, pnl: null, trades: 0 },

  { day: 29, pnl: null, trades: 0 },
  { day: 30, pnl: 1100, trades: 2 },
];

const CalendarGrid = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-4 md:p-5 border-b flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="font-semibold text-lg">June 2025</h2>

          <p className="text-sm text-slate-500">Trading performance calendar</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="
            h-10 w-10
            border border-slate-200
            rounded-xl
            flex items-center justify-center
            hover:bg-slate-50
            "
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className="
            h-10 px-4
            border border-slate-200
            rounded-xl
            text-sm font-medium
            "
          >
            Today
          </button>

          <button
            className="
            h-10 w-10
            border border-slate-200
            rounded-xl
            flex items-center justify-center
            hover:bg-slate-50
            "
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll for Mobile */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          {/* Week Header */}
          <div className="grid grid-cols-7 border-b bg-slate-50">
            {weekDays.map((day) => (
              <div
                key={day}
                className="
                py-3
                text-center
                text-sm
                font-semibold
                text-slate-600
                border-r
                last:border-r-0
                "
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Body */}
          <div className="grid grid-cols-7">
            {calendarDays.map((item) => (
              <CalendarDay
                key={item.day}
                day={item.day}
                pnl={item.pnl}
                trades={item.trades}
                selected={item.selected}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;
