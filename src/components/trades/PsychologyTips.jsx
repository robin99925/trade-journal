import { Lightbulb, Target, ShieldCheck, Flame, BarChart3 } from "lucide-react";

const tips = [
  {
    icon: Lightbulb,
    title: "Awareness is the first step to improvement.",
    text: "The more honest you are, the more you grow.",
  },
  {
    icon: Target,
    title: "Emotions are normal.",
    text: "But uncontrolled emotions lead to poor decisions.",
  },
  {
    icon: BarChart3,
    title: "Track your patterns.",
    text: "You can't improve what you don't measure.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline beats motivation.",
    text: "Build habits, not just feelings.",
  },
  {
    icon: Flame,
    title: "Journaling builds consistency.",
    text: "Small reflections lead to big changes.",
  },
];

const PsychologyTips = () => {
  return (
    <div className="bg-white rounded-3xl border border-gray-100 p-6">
      <h3 className="text-2xl font-semibold mb-6">💡 Psychology Tips</h3>

      <div className="space-y-5">
        {tips.map((tip, index) => {
          const Icon = tip.icon;

          return (
            <div
              key={index}
              className="flex gap-4 pb-5 border-b last:border-none"
            >
              <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center">
                <Icon className="text-violet-600" size={20} />
              </div>

              <div>
                <h4 className="font-semibold">{tip.title}</h4>

                <p className="text-sm text-slate-500 mt-1">{tip.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PsychologyTips;
