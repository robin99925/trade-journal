import { useState } from "react";

const tabs = [
  {
    id: "all",
    label: "All Trades",
    count: 247,
  },
  {
    id: "winning",
    label: "Winning",
    count: 156,
  },
  {
    id: "losing",
    label: "Losing",
    count: 81,
  },
  {
    id: "breakeven",
    label: "Break Even",
    count: 10,
  },
];

const TradeTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="w-full mb-6">
      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
        {tabs.map((tab) => {
          const active = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-shrink-0
                flex items-center gap-2
                px-5 py-3
                rounded-xl
                border
                transition-all
                duration-200

                ${
                  active
                    ? "bg-violet-600 border-violet-600 text-white shadow-lg"
                    : "bg-[#111827] border-gray-700 text-gray-300 hover:border-violet-500 hover:text-white"
                }
              `}
            >
              <span className="font-medium whitespace-nowrap">{tab.label}</span>

              <span
                className={`
                  px-2 py-0.5
                  rounded-full
                  text-xs
                  font-semibold

                  ${
                    active
                      ? "bg-white/20 text-white"
                      : "bg-gray-700 text-gray-200"
                  }
                `}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TradeTabs;
