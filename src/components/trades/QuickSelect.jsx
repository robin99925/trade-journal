const symbols = [
  { symbol: "NIFTY 50", lotSize: 65 },
  { symbol: "BANKNIFTY", lotSize: 30 },
  { symbol: "FINNIFTY", lotSize: 65 },
  { symbol: "MIDCPNIFTY", lotSize: 120 },
  { symbol: "SENSEX", lotSize: 20 },
  { symbol: "BANKEX", lotSize: 30 },
];

const QuickSelect = ({ selected = "", setTrade }) => {
  const handleSelect = (item) => {
    if (typeof setTrade === "function") {
      setTrade((prev) => ({
        ...prev,
        symbol: item.symbol,
        lotSize: item.lotSize,
      }));
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold mb-5">⚡ Quick Select</h3>

      <div className="grid grid-cols-2 gap-3">
        {symbols.map((item) => (
          <button
            key={item.symbol}
            type="button"
            onClick={() => handleSelect(item)}
            className={`min-h-12 px-3 py-2 rounded-xl border font-medium text-sm transition ${
              selected === item.symbol
                ? "bg-violet-600 text-white border-violet-600 shadow-sm"
                : "bg-white border-slate-200 text-slate-700 hover:bg-violet-50 hover:border-violet-200"
            }`}
          >
            {item.symbol}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickSelect;
