import { Star, ClipboardCheck } from "lucide-react";

const ReflectionCard = ({ title, value }) => (
  <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4">
    <h4 className="font-semibold text-slate-900 mb-2">{title}</h4>

    <p className="text-slate-600 leading-relaxed">
      {value || "No notes added."}
    </p>
  </div>
);

const ReviewCard = ({ trade }) => {
  const r = trade?.review || {};

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-violet-100 flex items-center justify-center">
          <ClipboardCheck size={18} className="text-violet-600" />
        </div>

        <div>
          <h3 className="font-bold text-slate-900">Review & Reflection</h3>

          <p className="text-xs text-slate-500">
            Post trade analysis & learnings
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4 mb-5">
          <p className="text-xs text-slate-500 mb-3">Trade Rating</p>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                fill={star <= (r.rating || 0) ? "currentColor" : "none"}
                className={
                  star <= (r.rating || 0) ? "text-yellow-500" : "text-slate-300"
                }
              />
            ))}
          </div>

          <p className="text-sm text-slate-500 mt-2">
            {r.rating || 0}/5 Rating
          </p>
        </div>

        {/* Reflection Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          <ReflectionCard title="✅ What Went Well?" value={r.wentWell} />

          <ReflectionCard
            title="📈 What Could Improve?"
            value={r.improvement}
          />

          <ReflectionCard title="🎯 Key Learning" value={r.learning} />
        </div>

        {/* Additional Notes */}
        <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <h4 className="font-semibold text-slate-900 mb-2">
            Additional Notes
          </h4>

          <p className="text-slate-600 leading-relaxed">
            {r.notes || "No additional notes added."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
