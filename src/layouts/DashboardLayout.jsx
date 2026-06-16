import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import MobileSidebar from "../components/dashboard/MobileSidebar";
import Header from "../components/dashboard/Header";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile Sidebar */}
      <MobileSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main
          className="
          flex-1
          min-w-0
          lg:ml-[280px]
          "
        >
          <Header setSidebarOpen={setSidebarOpen} />

          <div className="p-4 md:p-6 xl:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
