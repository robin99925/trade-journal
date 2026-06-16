import { CalendarDays } from "lucide-react";

const CalendarHeader = () => {
  return (
    <div
      className="
      flex
      items-start
      gap-4
      "
    >
      {/* Icon */}
      <div
        className="
        h-12
        w-12
        md:h-14
        md:w-14
        rounded-2xl
        bg-violet-100
        text-violet-600
        flex
        items-center
        justify-center
        shrink-0
        "
      >
        <CalendarDays size={28} />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <h1
          className="
          text-2xl
          md:text-3xl
          font-bold
          text-slate-900
          "
        >
          Calendar
        </h1>

        <p
          className="
          mt-1
          text-sm
          md:text-base
          text-slate-500
          max-w-3xl
          "
        >
          Visual overview of your trading activity. Track performance, identify
          patterns, and analyze your trading consistency across days, weeks, and
          months.
        </p>
      </div>
    </div>
  );
};

export default CalendarHeader;
