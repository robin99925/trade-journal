import { Bell } from "lucide-react";

const Topbar = () => {
  return (
    <div
      className="
      h-20
      border-b
      border-slate-800
      flex
      items-center
      justify-between
      px-6
      "
    >
      <div>
        <h1 className="text-xl font-semibold text-white">Dashboard</h1>

        <p className="text-sm text-slate-400">Welcome back 👋</p>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="
          p-3
          rounded-xl
          bg-slate-900
          border
          border-slate-800
          "
        >
          <Bell size={18} />
        </button>

        <div
          className="
          h-10
          w-10
          rounded-full
          bg-violet-600
          flex
          items-center
          justify-center
          font-semibold
          "
        >
          R
        </div>
      </div>
    </div>
  );
};

export default Topbar;
