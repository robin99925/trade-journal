import { Menu } from "lucide-react";
import UserProfile from "./UserProfile";

const Header = ({ setSidebarOpen }) => {
  return (
    <header
      className="
      sticky
      top-0
      z-30
      bg-slate-50/95
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
        <div className="flex items-center justify-between gap-3">
          {/* Left Side */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <button
              onClick={() => setSidebarOpen(true)}
              className="
              lg:hidden
              p-2.5
              rounded-xl
              border
              border-slate-200
              bg-white
              shadow-sm
              shrink-0
              "
            >
              <Menu size={20} />
            </button>

            <div className="min-w-0">
              <h1
                className="
                text-xl
                sm:text-2xl
                lg:text-3xl
                font-bold
                text-slate-900
                truncate
                "
              >
                Welcome Back 👋
              </h1>

              <p
                className="
                hidden
                md:block
                text-sm
                text-slate-500
                "
              >
                Track your performance
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="shrink-0">
            <UserProfile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
