const tips = [
  {
    title: "Plan your trade and trade your plan.",
    text: "A clear plan reduces impulsive decisions.",
  },
  {
    title: "Focus on high-probability setups.",
    text: "Quality over quantity leads to consistency.",
  },
  {
    title: "Define your risk before entry.",
    text: "Know your stop loss and position size.",
  },
  {
    title: "Keep it simple.",
    text: "Simple strategies are easier to execute.",
  },
  {
    title: "Review and improve.",
    text: "Learn from every trade.",
  },
];

const StrategyTips = () => {
  return (
    <div className="bg-white rounded-3xl border p-6">
      <h3 className="text-2xl font-semibold mb-6">💡 Strategy Tips</h3>

      <div className="space-y-5">
        {tips.map((tip, index) => (
          <div key={index} className="border-b pb-4 last:border-none">
            <h4 className="font-semibold">{tip.title}</h4>

            <p className="text-sm text-slate-500 mt-1">{tip.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyTips;
