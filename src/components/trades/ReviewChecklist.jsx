import { CheckCircle, Circle } from "lucide-react";

const ReviewChecklist = () => {
  const checklist = [
    {
      title: "Trade details are correct",
      done: true,
    },
    {
      title: "Emotions tracked honestly",
      done: true,
    },
    {
      title: "Strategy documented clearly",
      done: true,
    },
    {
      title: "Key learnings noted",
      done: true,
    },
    {
      title: "Screenshots added (Optional)",
      done: false,
      value: "Add",
    },
  ];

  return (
    <div className="bg-white rounded-3xl border p-6">
      <h3 className="text-2xl font-semibold mb-1">📋 Reflection Checklist</h3>

      <p className="text-slate-500 text-sm mb-6">Review before saving</p>

      <div className="space-y-5">
        {checklist.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              {item.done ? (
                <CheckCircle className="text-green-500" />
              ) : (
                <Circle className="text-gray-400" />
              )}

              <span>{item.title}</span>
            </div>

            {item.value && (
              <span className="text-violet-600 font-medium">{item.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewChecklist;
