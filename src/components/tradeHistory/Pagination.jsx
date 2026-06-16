import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div
      className="
      flex
      flex-col
      lg:flex-row
      items-center
      justify-between
      gap-4
      px-6
      py-5
      border-t
      border-slate-200
      bg-white
      rounded-b-2xl
      "
    >
      {/* Left */}
      <p className="text-sm text-slate-500">Showing 1 to 10 of 48 trades</p>

      {/* Center */}
      <div className="flex items-center gap-2">
        <button
          className="
          h-10 w-10
          rounded-lg
          border
          border-slate-200
          flex items-center justify-center
          "
        >
          <ChevronLeft size={18} />
        </button>

        <button className="h-10 w-10 rounded-lg bg-violet-600 text-white">
          1
        </button>

        <button className="h-10 w-10 rounded-lg border border-slate-200">
          2
        </button>

        <button className="h-10 w-10 rounded-lg border border-slate-200">
          3
        </button>

        <button className="h-10 w-10 rounded-lg border border-slate-200">
          4
        </button>

        <button className="h-10 w-10 rounded-lg border border-slate-200">
          5
        </button>

        <span className="px-2">...</span>

        <button
          className="
          h-10 w-10
          rounded-lg
          border
          border-slate-200
          flex items-center justify-center
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-slate-500">Rows per page:</span>

        <select
          className="
          h-10
          px-3
          rounded-lg
          border
          border-slate-200
          "
        >
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
