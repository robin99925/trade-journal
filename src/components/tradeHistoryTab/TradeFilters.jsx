import { Search, Download } from "lucide-react";

const TradeFilters = ({ activeTab, setActiveTab, search, setSearch }) => {
  const tabs = [
    { id: "all", label: "All Trades" },
    { id: "win", label: "Winning" },
    { id: "loss", label: "Losing" },
  ];

  return (
    <div className="p-6 border-b border-slate-100">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Tabs */}
        <div className="bg-slate-100 p-1 rounded-2xl flex w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all
                ${
                  activeTab === tab.id
                    ? "bg-violet-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search + Export */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by symbol..."
              className="
                h-12
                w-full
                sm:w-80
                rounded-xl
                border
                border-slate-200
                pl-11
                pr-4
                outline-none
                focus:border-violet-500
              "
            />
          </div>

          <button
            className="
              h-12
              px-4
              rounded-xl
              border
              border-slate-200
              flex
              items-center
              justify-center
              gap-2
              hover:bg-slate-50
            "
          >
            <Download size={18} />
            <span className="text-sm font-medium">Export</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradeFilters;
