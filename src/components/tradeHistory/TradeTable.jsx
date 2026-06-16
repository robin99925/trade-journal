import { MoreVertical } from "lucide-react";
import { tradeData } from "../../data/tradeData";

const TradesTable = () => {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      border
      border-slate-200
      overflow-hidden
      "
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1200px]">
          <thead>
            <tr className="border-b bg-slate-50">
              <th className="p-4 text-left">Date & Time</th>

              <th className="p-4 text-left">Symbol</th>

              <th className="p-4 text-left">Market</th>

              <th className="p-4 text-left">Type</th>

              <th className="p-4 text-left">Side</th>

              <th className="p-4 text-left">Entry / Exit</th>

              <th className="p-4 text-left">R:R</th>

              <th className="p-4 text-left">PnL</th>

              <th className="p-4 text-left">Status</th>

              <th className="p-4 text-left">Strategy</th>

              <th className="p-4 text-left">Tags</th>

              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tradeData.map((trade) => (
              <tr key={trade.id} className="border-b hover:bg-slate-50">
                <td className="p-4">
                  <p>{trade.date}</p>
                  <p className="text-sm text-slate-500">{trade.time}</p>
                </td>

                <td className="p-4 font-semibold">{trade.symbol}</td>

                <td className="p-4">{trade.market}</td>

                <td className="p-4">{trade.type}</td>

                <td className="p-4">
                  <span
                    className={
                      trade.side === "Long" ? "text-green-600" : "text-red-500"
                    }
                  >
                    {trade.side}
                  </span>
                </td>

                <td className="p-4">
                  <p>{trade.entry}</p>
                  <p className="text-slate-500">{trade.exit}</p>
                </td>

                <td className="p-4">{trade.rr}</td>

                <td
                  className={`p-4 font-semibold ${
                    trade.pnl.includes("+") ? "text-green-600" : "text-red-500"
                  }`}
                >
                  ₹{trade.pnl}
                </td>

                <td className="p-4">
                  <span
                    className={`
                    px-3 py-1 rounded-full text-sm

                    ${
                      trade.status === "Win"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }
                    `}
                  >
                    {trade.status}
                  </span>
                </td>

                <td className="p-4">{trade.strategy}</td>

                <td className="p-4">
                  <div className="flex gap-2 flex-wrap">
                    {trade.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                        px-2
                        py-1
                        text-xs
                        rounded-lg
                        bg-slate-100
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>

                <td className="p-4 text-center">
                  <button>
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradesTable;
