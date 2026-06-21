import { Brain, Star } from "lucide-react";

const InfoCard = ({ label, value }) => (
  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
    <p className="text-xs text-slate-500 mb-1">{label}</p>
    <p className="font-semibold text-slate-900">{value || "-"}</p>
  </div>
);

const PsychologyCard = ({ trade }) => {
  const p = trade?.psychology || {};

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-violet-100 flex items-center justify-center">
          <Brain size={18} className="text-violet-600" />
        </div>

        <div>
          <h3 className="font-bold text-slate-900">Psychology</h3>
          <p className="text-xs text-slate-500">
            Trading mindset & emotional state
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard label="Mindset Before Trade" value={p.mindset} />
          <InfoCard label="Emotion During Trade" value={p.emotion} />
        </div>

        {/* Confidence */}
        <div className="mt-5 bg-slate-50 rounded-2xl border border-slate-100 p-4">
          <p className="text-xs text-slate-500 mb-3">Confidence Level</p>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                fill={star <= (p.confidence || 0) ? "currentColor" : "none"}
                className={
                  star <= (p.confidence || 0)
                    ? "text-violet-500"
                    : "text-slate-300"
                }
              />
            ))}
          </div>

          <p className="text-sm text-slate-500 mt-2">
            {p.confidence || 0}/5 Confidence
          </p>
        </div>

        {/* Discipline & Distraction */}
        <div className="grid md:grid-cols-2 gap-4 mt-5">
          <InfoCard label="Trading Discipline" value={p.discipline} />

          <InfoCard
            label="Distractions / External Factors"
            value={p.distraction}
          />
        </div>

        {/* Thoughts */}
        <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <p className="text-xs text-slate-500 mb-2">
            Thoughts Before Taking Trade
          </p>

          <p className="text-slate-800 leading-relaxed">
            {p.thoughts || "No notes added."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PsychologyCard;
