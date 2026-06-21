import { Target, ChevronDown } from "lucide-react";

const setups = ["Breakout", "Pullback", "Reversal", "Trend Following"];

const timeframes = [
  "1 Minute",
  "2 Minute",
  "3 Minute",
  "5 Minutes",
  "15 Minutes",
  "30 Minutes",
  "1 Hour",
];

const tradePlans = [
  "Follow Trend",
  "Breakout",
  "Pullback",
  "Reversal",
  "Support & Resistance",
  "Moving Average",
  "Price Action",
  "Other",
];

const entryTypes = ["Market Order", "Limit Order", "Stop Order"];

const StrategyForm = ({ strategy, setStrategy, nextStep, prevStep }) => {
  const togglePlan = (plan) => {
    const exists = strategy.plans.includes(plan);

    if (exists) {
      setStrategy({
        ...strategy,
        plans: strategy.plans.filter((item) => item !== plan),
      });
    } else {
      setStrategy({
        ...strategy,
        plans: [...strategy.plans, plan],
      });
    }
  };

  const handleNext = () => {
    console.log("Strategy Data:", strategy);
    nextStep();
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8">
      <div className="flex gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center">
          <Target size={28} className="text-violet-600" />
        </div>

        <div>
          <h2 className="text-3xl font-bold">Strategy</h2>

          <p className="text-slate-500">Document your trading setup and plan</p>
        </div>
      </div>

      {/* Setup + Timeframe */}

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="font-semibold block mb-1">Trading Setup</label>

          <p className="text-sm text-slate-500 mb-3">Select your setup</p>

          <div className="relative">
            <select
              value={strategy.setup}
              onChange={(e) =>
                setStrategy({
                  ...strategy,
                  setup: e.target.value,
                })
              }
              className="w-full h-12 border rounded-xl px-4 appearance-none"
            >
              <option value="">Select Setup</option>

              {setups.map((setup) => (
                <option key={setup} value={setup}>
                  {setup}
                </option>
              ))}
            </select>

            <ChevronDown className="absolute right-4 top-3 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="font-semibold block mb-1">Timeframe</label>

          <p className="text-sm text-slate-500 mb-3">Select timeframe</p>

          <div className="relative">
            <select
              value={strategy.timeframe}
              onChange={(e) =>
                setStrategy({
                  ...strategy,
                  timeframe: e.target.value,
                })
              }
              className="w-full h-12 border rounded-xl px-4 appearance-none"
            >
              <option value="">Select Timeframe</option>

              {timeframes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>

            <ChevronDown className="absolute right-4 top-3 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Entry Type */}

      <div className="mb-8">
        <label className="font-semibold block mb-3">Entry Type</label>

        <div className="grid md:grid-cols-3 gap-3">
          {entryTypes.map((type) => (
            <button
              type="button"
              key={type}
              onClick={() =>
                setStrategy({
                  ...strategy,
                  entryType: type,
                })
              }
              className={`h-12 rounded-xl border font-medium
              ${
                strategy.entryType === type
                  ? "border-violet-500 bg-violet-50 text-violet-600"
                  : "border-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Expected Outcome */}

      <div className="mb-8">
        <label className="font-semibold block mb-1">Expected Outcome</label>

        <textarea
          rows={4}
          maxLength={500}
          value={strategy.expectedOutcome}
          onChange={(e) =>
            setStrategy({
              ...strategy,
              expectedOutcome: e.target.value,
            })
          }
          placeholder="Enter your strategy's expected outcome..."
          className="w-full border rounded-xl p-4 resize-none"
        />

        <div className="text-right text-xs text-slate-400 mt-2">
          {strategy.expectedOutcome.length}
          /500
        </div>
      </div>

      <div className="flex justify-between">
        <button onClick={prevStep} className="h-12 px-8 border rounded-xl">
          ← Back
        </button>

        <button
          onClick={handleNext}
          className="h-12 px-10 rounded-xl text-white bg-gradient-to-r from-violet-600 to-purple-500"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default StrategyForm;
