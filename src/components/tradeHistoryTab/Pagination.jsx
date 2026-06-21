const Pagination = ({ page = 1, totalPages = 1, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between p-6">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 rounded-xl border border-slate-200 disabled:opacity-50"
      >
        Previous
      </button>

      <p className="text-sm text-slate-500">
        Page {page} of {totalPages}
      </p>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 rounded-xl border border-slate-200 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
