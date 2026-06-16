import { Info } from "lucide-react";

const heatmapData = [
  ["low", "medium", "high", "none", "medium"],
  ["none", "high", "medium", "low", "high"],
  ["medium", "medium", "none", "high", "low"],
  ["high", "none", "medium", "medium", "high"],
  ["low", "medium", "high", "none", "medium"],
];

const getColor = (value) => {
  switch (value) {
    case "high":
      return "bg-green-600";
    case "medium":
      return "bg-green-300";
    case "low":
      return "bg-green-100";
    default:
      return "bg-slate-200";
  }
};

const CalendarHeatmap = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 md:p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <h3 className="font-semibold text-slate-900">Trading Heatmap</h3>

        <Info size={15} className="text-slate-400" />
      </div>

      {/* Days */}
      <div className="grid grid-cols-6 gap-2 mb-3">
        <div />

        {["M", "T", "W", "T", "F"].map((day) => (
          <div
            key={day}
            className="
            text-center
            text-xs
            text-slate-500
            font-medium
            "
          >
            {day}
          </div>
        ))}
      </div>

      {/* Heatmap Grid */}
      <div className="space-y-2">
        {heatmapData.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-6 gap-2">
            <div
              className="
              text-xs
              text-slate-400
              flex
              items-center
              "
            >
              W{weekIndex + 1}
            </div>

            {week.map((item, index) => (
              <div
                key={index}
                className={`
                  aspect-square
                  rounded-md
                  ${getColor(item)}
                `}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div
        className="
        mt-6
        pt-4
        border-t
        border-slate-100
        "
      >
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-500">Less</span>

          <div className="flex gap-1">
            <div className="h-3 w-3 rounded bg-slate-200" />
            <div className="h-3 w-3 rounded bg-green-100" />
            <div className="h-3 w-3 rounded bg-green-300" />
            <div className="h-3 w-3 rounded bg-green-600" />
          </div>

          <span className="text-slate-500">More</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeatmap;
