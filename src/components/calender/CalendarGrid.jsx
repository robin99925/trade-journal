import { ChevronLeft, ChevronRight } from "lucide-react";
import CalendarDay from "./CalendarDay";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarGrid = ({
  calendarData = {},
  selectedDate,
  setSelectedDate,
  onPrevMonth,
  onNextMonth,
  onToday,
  loading = false,
}) => {
  const today = new Date();

  const month = Number(calendarData?.month) || today.getMonth() + 1;
  const year = Number(calendarData?.year) || today.getFullYear();

  const apiDays = Array.isArray(calendarData?.days) ? calendarData.days : [];

  console.log("Calendar API Days:", apiDays);

  // Important: API data ko day number ke according map karna
  const dayDataMap = apiDays.reduce((acc, item) => {
    if (!item?.date) return acc;

    // "2026-06-20" => 20
    const dayNumber = Number(String(item.date).split("T")[0].split("-")[2]);

    if (!Number.isNaN(dayNumber)) {
      acc[dayNumber] = {
        pnl: Number(item.pnl || 0),
        trades: Number(item.tradeCount || 0),
        status: item.status || "BE",
      };
    }

    return acc;
  }, {});

  console.log("Day Data Map:", dayDataMap);

  const firstDateOfMonth = new Date(year, month - 1, 1);
  const firstWeekDay = firstDateOfMonth.getDay();
  const totalDaysInMonth = new Date(year, month, 0).getDate();

  const monthName = firstDateOfMonth.toLocaleString("en-IN", {
    month: "long",
  });

  const calendarCells = [];

  // Starting blank cells
  for (let index = 0; index < firstWeekDay; index++) {
    calendarCells.push(
      <div
        key={`empty-start-${index}`}
        className="min-h-[65px] md:min-h-[80px] lg:min-h-[90px] border-r border-b bg-slate-50"
      />,
    );
  }

  // Month days
  for (let day = 1; day <= totalDaysInMonth; day++) {
    const dayData = dayDataMap[day];

    const formattedDate = `${year}-${String(month).padStart(
      2,
      "0",
    )}-${String(day).padStart(2, "0")}`;

    const isToday =
      today.getDate() === day &&
      today.getMonth() + 1 === month &&
      today.getFullYear() === year;

    calendarCells.push(
      <div
        key={formattedDate}
        onClick={() => setSelectedDate?.(formattedDate)}
        className="cursor-pointer"
      >
        <CalendarDay
          day={day}
          pnl={dayData?.pnl ?? null}
          trades={dayData?.trades ?? 0}
          selected={selectedDate === formattedDate}
          today={isToday}
        />
      </div>,
    );
  }

  // Ending blank cells
  const remainingCells = calendarCells.length % 7;

  if (remainingCells !== 0) {
    const emptyCellsAtEnd = 7 - remainingCells;

    for (let index = 0; index < emptyCellsAtEnd; index++) {
      calendarCells.push(
        <div
          key={`empty-end-${index}`}
          className="min-h-[65px] md:min-h-[80px] lg:min-h-[90px] border-r border-b bg-slate-50"
        />,
      );
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <div className="p-4 md:p-5 border-b flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="font-semibold text-lg">
            {monthName} {year}
          </h2>

          <p className="text-sm text-slate-500">Trading performance calendar</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrevMonth}
            className="h-10 w-10 border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={onToday}
            className="h-10 px-4 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50"
          >
            Today
          </button>

          <button
            type="button"
            onClick={onNextMonth}
            className="h-10 w-10 border border-slate-200 rounded-xl flex items-center justify-center hover:bg-slate-50"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          <div className="grid grid-cols-7 border-b bg-slate-50">
            {weekDays.map((day) => (
              <div
                key={day}
                className="py-3 text-center text-sm font-semibold text-slate-600 border-r last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">{calendarCells}</div>
        </div>
      </div>

      {loading && (
        <div className="py-3 text-center text-sm text-slate-500 border-t">
          Loading calendar data...
        </div>
      )}
    </div>
  );
};

export default CalendarGrid;
