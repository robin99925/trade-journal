import { ImageIcon, Maximize2 } from "lucide-react";

const ScreenshotCard = ({ trade }) => {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-violet-100 flex items-center justify-center">
          <ImageIcon size={18} className="text-violet-600" />
        </div>

        <div>
          <h3 className="font-bold text-slate-900">Trade Screenshot</h3>

          <p className="text-xs text-slate-500">
            Chart snapshot & execution proof
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {trade?.screenshot ? (
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200">
            <img
              src={trade.screenshot}
              alt="Trade Screenshot"
              className="w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
              <button
                type="button"
                className="opacity-0 group-hover:opacity-100 transition bg-white rounded-xl p-3 shadow-lg"
              >
                <Maximize2 size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div className="aspect-video rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center text-center px-6">
            <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-3">
              <ImageIcon size={24} className="text-slate-400" />
            </div>

            <h4 className="font-semibold text-slate-700">
              No Screenshot Available
            </h4>

            <p className="text-sm text-slate-500 mt-1">
              Screenshot was not uploaded for this trade.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenshotCard;
