import { CheckCircle, Circle } from "lucide-react";

const StrategyChecklist = ({ strategy }) => {
  const items = [
    {
      title: "Clear setup identified",
      value: strategy.setup,
      completed: true,
    },
    {
      title: "Entry criteria defined",
      value: strategy.entryType,
      completed: true,
    },
    {
      title: "Risk management planned",
      value: "Yes",
      completed: true,
    },
    {
      title: "Expected outcome noted",
      value: strategy.expectedOutcome ? "Yes" : "No",
      completed: true,
    },
    {
      title: "Exit strategy defined",
      value: "Add",
      completed: false,
    },
  ];

  return (
    <div className="bg-white rounded-3xl border p-6">
      <h3 className="text-2xl font-semibold mb-6">📋 Strategy Checklist</h3>

      <div className="space-y-5">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center border-b pb-4"
          >
            <div className="flex items-center gap-3">
              {item.completed ? (
                <CheckCircle className="text-green-500" size={20} />
              ) : (
                <Circle className="text-gray-400" size={20} />
              )}

              <span>{item.title}</span>
            </div>

            <span className="text-violet-600 text-sm font-medium">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyChecklist;
