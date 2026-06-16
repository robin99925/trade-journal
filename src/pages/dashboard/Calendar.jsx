import DashboardLayout from "../../layouts/DashboardLayout";

import CalendarHeader from "../../components/calender/CalendarHeader";
import CalendarToolbar from "../../components/calender/CalendarToolbar";
import CalendarGrid from "../../components/calender/CalendarGrid";
import MonthlySummary from "../../components/calender/MonthlySummary";
import CalendarHeatmap from "../../components/calender/CalendarHeatmap";
import WhyCalendarCard from "../../components/calender/WhyCalendarCard";
import CalendarStatsFooter from "../../components/calender/CalendarStatsFooter";

const Calendar = () => {
  return (
    <DashboardLayout>
      <div
        className="
        w-full
        p-4
        md:p-6
        xl:p-8
        space-y-6
        "
      >
        {/* Header */}
        <CalendarHeader />

        {/* Toolbar */}
        <CalendarToolbar />

        {/* Main Content */}
        <div
          className="
          grid
          grid-cols-1
          xl:grid-cols-4
          gap-6
          "
        >
          {/* Left Section */}
          <div className="xl:col-span-3 space-y-6">
            <CalendarGrid />

            <CalendarStatsFooter />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <MonthlySummary />

            <CalendarHeatmap />

            <WhyCalendarCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Calendar;
