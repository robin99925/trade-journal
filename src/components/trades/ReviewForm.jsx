import { FileText } from "lucide-react";

const ratings = [
  { value: 1, label: "Poor" },
  { value: 2, label: "Below Avg" },
  { value: 3, label: "Average" },
  { value: 4, label: "Good" },
  { value: 5, label: "Excellent" },
];

const ReviewForm = ({ review, setReview, prevStep, handleSubmit, loading }) => {
  const updateField = (field, value) => {
    setReview({
      ...review,
      [field]: value,
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8">
      {/* Header */}

      <div className="flex gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center">
          <FileText size={28} className="text-violet-600" />
        </div>

        <div>
          <h2 className="text-3xl font-bold">Review & Reflection</h2>

          <p className="text-slate-500">
            Review your trade and note key learnings
          </p>
        </div>
      </div>

      {/* Rating */}

      <div className="mb-8">
        <label className="font-semibold block mb-1">
          How do you rate this trade overall?
        </label>

        <p className="text-sm text-slate-500 mb-4">
          Rate your execution and decision making.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {ratings.map((item) => (
            <button
              key={item.value}
              onClick={() => updateField("rating", item.value)}
              className={`h-16 rounded-xl border flex flex-col items-center justify-center

              ${
                review.rating === item.value
                  ? "border-violet-500 bg-violet-50 text-violet-600"
                  : "border-gray-200"
              }`}
            >
              <span className="font-bold text-lg">{item.value}</span>

              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      <ReviewTextarea
        title="Key learning from this trade"
        subtitle="What is the main takeaway from this trade?"
        value={review.learning}
        placeholder="What did you learn from this trade..."
        onChange={(value) => updateField("learning", value)}
      />

      <div className="flex justify-between mt-8">
        <button onClick={prevStep} className="h-12 px-8 border rounded-xl">
          ← Back
        </button>

        <button
          type="button"
          disabled={loading}
          onClick={handleSubmit}
          className={`h-12 px-10 rounded-xl text-white bg-gradient-to-r from-violet-600 to-purple-500
    ${loading ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"}
  `}
        >
          {loading ? "Saving..." : "Save Trade ✓"}
        </button>
      </div>
    </div>
  );
};

const ReviewTextarea = ({ title, subtitle, value, placeholder, onChange }) => (
  <div className="mb-6">
    <label className="font-semibold block mb-1">{title}</label>

    <p className="text-sm text-slate-500 mb-3">{subtitle}</p>

    <textarea
      rows={4}
      maxLength={500}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border rounded-xl p-4 resize-none"
    />

    <div className="text-right text-xs text-slate-400 mt-2">
      {value.length}/500
    </div>
  </div>
);

export default ReviewForm;
