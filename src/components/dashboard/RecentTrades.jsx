const trades = [
  {
    pair: "NIFTY",
    pnl: "+4500",
    result: "Win",
  },
  {
    pair: "BANKNIFTY",
    pnl: "-1800",
    result: "Loss",
  },
  {
    pair: "RELIANCE",
    pnl: "+3200",
    result: "Win",
  },
];

const RecentTrades = () => {
  return (
    <div className="bg-white rounded-3xl border p-6">
      <h3 className="text-xl font-bold mb-6">Recent Trades</h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left py-3">Symbol</th>

              <th className="text-left py-3">Result</th>

              <th className="text-right py-3">PnL</th>
            </tr>
          </thead>

          <tbody>
            {trades.map((trade, index) => (
              <tr key={index}>
                <td className="py-4">{trade.pair}</td>

                <td>{trade.result}</td>

                <td className="text-right">{trade.pnl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTrades;
