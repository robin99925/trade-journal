import {
  LayoutDashboard,
  PlusCircle,
  History,
  BarChart3,
  FileText,
  CalendarDays,
  Bot,
  Settings,
  Crown,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: PlusCircle,
    label: "Add Trade",
    path: "/add-trade",
  },
  {
    icon: History,
    label: "Trade History",
    path: "/trade-history",
  },
  // {
  //   icon: BarChart3,
  //   label: "Analytics",
  //   path: "/analytics",
  // },
  // {
  //   icon: FileText,
  //   label: "Reports",
  //   path: "/reports",
  // },
  {
    icon: CalendarDays,
    label: "Calendar",
    path: "/calendar",
  },
];

const Sidebar = () => {
  return (
    <aside
      className="
      fixed
      left-0
      top-0
      h-screen
      w-[280px]
      bg-[#0F172A]
      text-white
      z-40
      flex
      flex-col
      border-r
      border-slate-800
      "
    >
      {/* Logo */}
      <div className="px-6 py-8">
        <h1 className="text-3xl font-bold">TradeJournal</h1>
      </div>

      {/* Menu */}
      <div className="px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-3
                px-5
                py-4
                rounded-2xl
                transition-all

                ${
                  isActive
                    ? "bg-violet-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }
                `
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Trading Bot */}
      <div className="px-4 mt-6">
        <button
          className="
          w-full
          flex
          items-center
          justify-between
          px-5
          py-4
          rounded-2xl
          hover:bg-slate-800
          text-slate-300
          transition
          "
        >
          <div className="flex items-center gap-3">
            <Bot size={20} />
            <span>Trading Bot</span>
          </div>

          <span
            className="
            text-xs
            px-2
            py-1
            rounded-full
            bg-violet-600
            "
          >
            Soon
          </span>
        </button>
      </div>

      {/* Settings */}
      <div className="px-4 mt-2">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `
            flex
            items-center
            gap-3
            px-5
            py-4
            rounded-2xl
            transition-all

            ${
              isActive
                ? "bg-violet-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }
            `
          }
        >
          <Settings size={20} />
          <span>Settings</span>
        </NavLink>
      </div>

      {/* Push Bottom */}
      <div className="flex-1" />

      {/* Plan Card */}
      <div className="p-4">
        <div
          className="
          rounded-3xl
          bg-slate-800
          p-5
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
              h-12
              w-12
              rounded-xl
              bg-violet-600
              flex
              items-center
              justify-center
              "
            >
              <Crown size={22} />
            </div>

            <div>
              <p className="text-sm text-slate-400">Current Plan</p>

              <h3 className="font-semibold">Pro Plan</h3>
            </div>
          </div>

          <button
            className="
            mt-5
            w-full
            rounded-xl
            bg-violet-600
            py-3
            font-medium
            hover:bg-violet-500
            transition
            "
          >
            Manage Subscription
          </button>
        </div>
      </div>

      {/* User */}
      <div
        className="
        border-t
        border-slate-800
        p-4
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
            h-12
            w-12
            rounded-full
            bg-cyan-600
            flex
            items-center
            justify-center
            font-semibold
            "
          >
            RS
          </div>

          <div>
            <h4 className="font-medium">Robin Saini</h4>

            <p className="text-xs text-slate-400">robin@gmail.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
