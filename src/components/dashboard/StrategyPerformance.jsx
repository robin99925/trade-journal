const strategies = [
  {
    name: "Breakout",
    winRate: "74%",
  },
  {
    name: "Scalping",
    winRate: "66%",
  },
  {
    name: "Pullback",
    winRate: "58%",
  },
];

const StrategyPerformance = () => {
  return (
    <div className="bg-white rounded-3xl border p-6">
      <h3 className="text-xl font-bold mb-6">Top Strategies</h3>

      <div className="space-y-5">
        {strategies.map((item) => (
          <div key={item.name} className="flex justify-between">
            <span>{item.name}</span>

            <span className="font-semibold">{item.winRate}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyPerformance;
