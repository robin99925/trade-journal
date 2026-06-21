import { Target } from "lucide-react";

const InfoCard = ({ label, value }) => (
  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
    <p className="text-xs text-slate-500 mb-1">{label}</p>
    <p className="font-semibold text-slate-900">{value || "-"}</p>
  </div>
);

const StrategyCard = ({ trade }) => {
  const s = trade?.strategy || {};

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-violet-100 flex items-center justify-center">
          <Target size={18} className="text-violet-600" />
        </div>

        <div>
          <h3 className="font-bold text-slate-900">Strategy</h3>
          <p className="text-xs text-slate-500">
            Trade execution & setup details
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">
        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard label="Setup" value={s.setup} />
          <InfoCard label="Timeframe" value={s.timeframe} />
          <InfoCard label="Market Condition" value={s.marketCondition} />
        </div>

        {/* Plans */}
        <div className="rounded-2xl border border-slate-100 p-4">
          <p className="text-xs text-slate-500 mb-3">Trading Plan</p>

          <div className="flex flex-wrap gap-2">
            {s.plans?.length ? (
              s.plans.map((plan, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium"
                >
                  {plan}
                </span>
              ))
            ) : (
              <span className="text-slate-500">No plan selected</span>
            )}
          </div>
        </div>

        {/* Middle Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <InfoCard label="Entry Type" value={s.entryType} />
          <InfoCard label="Exit Strategy" value={s.exitStrategy} />
          <InfoCard label="Risk Management" value={s.riskManagement} />
        </div>

        {/* Tools */}
        <div className="rounded-2xl border border-slate-100 p-4">
          <p className="text-xs text-slate-500 mb-3">Key Instruments / Tools</p>

          <div className="flex flex-wrap gap-2">
            {s.tools?.length ? (
              s.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium"
                >
                  {tool}
                </span>
              ))
            ) : (
              <span className="text-slate-500">No tools selected</span>
            )}
          </div>
        </div>

        {/* Reason */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs text-slate-500 mb-2">Reason for Taking Trade</p>

          <p className="text-slate-800 leading-relaxed">
            {s.reason || "No reason added."}
          </p>
        </div>

        {/* Expected Outcome */}
        {s.expectedOutcome && (
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs text-slate-500 mb-2">Expected Outcome</p>

            <p className="text-slate-800 leading-relaxed">
              {s.expectedOutcome}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StrategyCard;
