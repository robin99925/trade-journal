import { Menu, Plus, ChevronDown } from "lucide-react";

const Header = ({ setSidebarOpen }) => {
  return (
    <header
      className="
        sticky
        top-0
        z-30
        bg-slate-50/90
        backdrop-blur
        border-b
        border-slate-200
        "
    >
      <div
        className="
        px-4
        md:px-6
        xl:px-8
        py-4
        "
      >
        <div
          className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-4
          "
        >
          {/* Left */}
          <div className="flex items-center gap-3">
            <button
              className="
              lg:hidden
              p-2
              rounded-xl
              border
              bg-white
              "
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={20} />
            </button>

            <div>
              <h1
                className="
                text-2xl
                md:text-3xl
                xl:text-4xl
                font-bold
                text-slate-900
                "
              >
                Welcome Back 👋
              </h1>

              <p className="text-slate-500">Track your performance</p>
            </div>
          </div>

          {/* Right */}
          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-3
            "
          >
            <button
              className="
              h-12
              px-5
              bg-white
              border
              rounded-xl
              flex
              items-center
              justify-center
              gap-2
              "
            >
              This Month
              <ChevronDown size={16} />
            </button>

            <button
              className="
              h-12
              px-6
              bg-violet-600
              rounded-xl
              text-white
              flex
              items-center
              justify-center
              gap-2
              "
            >
              <Plus size={18} />
              Add Trade
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
