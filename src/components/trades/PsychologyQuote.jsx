import { Quote } from "lucide-react";

const PsychologyQuote = () => {
  return (
    <div className="bg-violet-50 rounded-3xl p-8">
      <Quote className="text-violet-300 mb-6" size={40} />

      <h3 className="text-3xl font-semibold leading-relaxed text-slate-900">
        Your edge is not in being right every time, but in staying calm and
        executing your plan.
      </h3>

      <p className="mt-6 font-medium text-slate-700">— Unknown</p>
    </div>
  );
};

export default PsychologyQuote;
