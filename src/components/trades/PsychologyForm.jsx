import { Brain, ChevronDown } from "lucide-react";

const moods = [
  "😌 Confident",
  "🙂 Calm",
  "😐 Neutral",
  "😟 Anxious",
  "🥶 FOMO",
];

const confidenceLevels = [1, 2, 3, 4, 5];

const planOptions = [
  "❌ Not at all",
  "😐 Partially",
  "✅ Mostly",
  "🌟 Completely",
];

const PsychologyForm = ({ psychology, setPsychology, nextStep, prevStep }) => {
  const updatePsychology = (field, value) => {
    setPsychology((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-8 shadow-sm">
      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center shrink-0">
          <Brain className="text-violet-600" size={28} />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900">Psychology</h2>

          <p className="text-slate-500 mt-1">
            Track your mindset and emotions during the trade
          </p>
        </div>
      </div>

      {/* Mindset */}
      <div className="mb-8">
        <label className="block font-semibold text-slate-900 mb-1">
          Mindset Before the Trade
        </label>

        <p className="text-slate-500 text-sm mb-4">
          What was your mental state before taking this trade?
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {moods.map((mood) => (
            <button
              type="button"
              key={mood}
              onClick={() => updatePsychology("mindset", mood)}
              className={`h-12 rounded-xl border transition-all text-sm font-medium
                ${
                  psychology.mindset === mood
                    ? "border-violet-500 text-violet-600 bg-violet-50"
                    : "border-gray-200 hover:border-violet-300"
                }`}
            >
              {mood}
            </button>
          ))}
        </div>
      </div>

      {/* Emotion + Confidence */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="font-semibold block mb-1">
            Emotions During the Trade
          </label>

          <p className="text-sm text-slate-500 mb-3">
            What emotions did you feel while the trade was open?
          </p>

          <div className="relative">
            <select
              className="w-full h-14 rounded-xl border border-gray-200 px-4 appearance-none outline-none focus:border-violet-500"
              value={psychology.emotion}
              onChange={(e) => updatePsychology("emotion", e.target.value)}
            >
              <option value="">Select emotions</option>
              <option value="Fear">Fear</option>
              <option value="Greed">Greed</option>
              <option value="Excitement">Excitement</option>
              <option value="Patience">Patience</option>
              <option value="Confidence">Confidence</option>
            </select>

            <ChevronDown
              className="absolute right-4 top-4 text-gray-400 pointer-events-none"
              size={20}
            />
          </div>
        </div>

        <div>
          <label className="font-semibold block mb-1">Confidence Level</label>

          <p className="text-sm text-slate-500 mb-3">
            How confident were you in this trade?
          </p>

          <div className="grid grid-cols-5 overflow-hidden rounded-xl">
            {confidenceLevels.map((level) => (
              <button
                type="button"
                key={level}
                onClick={() => updatePsychology("confidence", level)}
                className={`h-14 border text-sm font-semibold
                  ${
                    psychology.confidence === level
                      ? "border-violet-500 bg-violet-50 text-violet-600"
                      : "border-gray-200 text-slate-700"
                  }`}
              >
                {level}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-2 text-xs text-slate-500">
            <span>1 = Not confident</span>
            <span>5 = Very confident</span>
          </div>
        </div>
      </div>

      {/* Discipline */}
      <div className="mb-8">
        <label className="font-semibold block mb-1">
          Did you follow your trading plan?
        </label>

        <p className="text-sm text-slate-500 mb-4">
          Rate how well you followed your plan.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {planOptions.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => updatePsychology("discipline", option)}
              className={`h-12 rounded-xl border text-sm font-medium
                ${
                  psychology.discipline === option
                    ? "border-violet-500 bg-violet-50 text-violet-600"
                    : "border-gray-200 hover:border-violet-300"
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Thoughts */}
      <div className="mb-6">
        <label className="font-semibold block mb-1">
          What went through your mind before entering the trade?
        </label>

        <p className="text-sm text-slate-500 mb-3">Be honest with yourself.</p>

        <textarea
          rows={4}
          maxLength={500}
          value={psychology.thoughts}
          onChange={(e) => updatePsychology("thoughts", e.target.value)}
          placeholder="Write your thoughts..."
          className="w-full border border-gray-200 rounded-xl p-4 resize-none outline-none focus:border-violet-500"
        />

        <div className="text-right text-xs text-slate-400 mt-2">
          {psychology.thoughts.length}/500
        </div>
      </div>

      {/* Distractions */}
      <div className="mb-10">
        <label className="font-semibold block mb-1">
          Any distractions or external factors?
        </label>

        <p className="text-sm text-slate-500 mb-3">
          News, calls, social media, etc.
        </p>

        <select
          className="w-full h-14 border border-gray-200 rounded-xl px-4 outline-none focus:border-violet-500"
          value={psychology.distraction}
          onChange={(e) => updatePsychology("distraction", e.target.value)}
        >
          <option value="">Select distractions (optional)</option>
          <option value="Social Media">Social Media</option>
          <option value="News">News</option>
          <option value="Phone Calls">Phone Calls</option>
          <option value="Work Pressure">Work Pressure</option>
          <option value="No Distraction">No Distraction</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={prevStep}
          className="px-8 h-12 border border-gray-300 rounded-xl font-medium hover:bg-slate-50"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={nextStep}
          className="px-10 h-12 rounded-xl bg-gradient-to-r from-violet-600 to-purple-500 text-white font-medium hover:opacity-90"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default PsychologyForm;
