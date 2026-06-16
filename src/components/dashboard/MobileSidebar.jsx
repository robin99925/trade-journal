import {
  X,
  LayoutDashboard,
  PlusCircle,
  History,
  BarChart3,
  FileText,
  CalendarDays,
  Settings,
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
  {
    icon: BarChart3,
    label: "Analytics",
    path: "/analytics",
  },
  {
    icon: FileText,
    label: "Reports",
    path: "/reports",
  },
  {
    icon: CalendarDays,
    label: "Calendar",
    path: "/calendar",
  },
  {
    icon: Settings,
    label: "Settings",
    path: "/settings",
  },
];

const MobileSidebar = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => setOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className="
        fixed
        left-0
        top-0
        h-screen
        w-[280px]
        bg-[#0F172A]
        text-white
        z-50
        flex
        flex-col
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <h2 className="text-2xl font-bold">TradeJournal</h2>

          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Menu */}
        <div className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  transition

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
      </aside>
    </>
  );
};

export default MobileSidebar;
