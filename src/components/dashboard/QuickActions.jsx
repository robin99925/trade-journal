import { PlusCircle, FileText, BarChart3 } from "lucide-react";

const QuickActions = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <button className="bg-white border rounded-3xl p-6 text-left">
        <PlusCircle />
        <h4 className="mt-4 font-bold">Add Trade</h4>
      </button>

      <button className="bg-white border rounded-3xl p-6 text-left">
        <FileText />
        <h4 className="mt-4 font-bold">Reports</h4>
      </button>

      <button className="bg-white border rounded-3xl p-6 text-left">
        <BarChart3 />
        <h4 className="mt-4 font-bold">Analytics</h4>
      </button>
    </div>
  );
};

export default QuickActions;
