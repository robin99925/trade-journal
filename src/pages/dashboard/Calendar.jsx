import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import CalendarHeader from "../../components/calender/CalendarHeader";
import CalendarToolbar from "../../components/calender/CalendarToolbar";
import CalendarGrid from "../../components/calender/CalendarGrid";
import MonthlySummary from "../../components/calender/MonthlySummary";
import CalendarStatsFooter from "../../components/calender/CalendarStatsFooter";

import { getCalendarData } from "../../services/calenderService";

const Calendar = () => {
  const today = new Date();

  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());

  const [calendarData, setCalendarData] = useState({
    month: today.getMonth() + 1,
    year: today.getFullYear(),
    days: [],
  });

  const [selectedDate, setSelectedDate] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCalendarData = async () => {
    try {
      setLoading(true);
      const response = await getCalendarData({
        month: selectedMonth,
        year: selectedYear,
      });

      console.log("Calendar Full API Response:", response);

      // API response ke andar actual calendar object nikaalna
      const result = response?.data || response || {};

      console.log("Calendar Result:", result);
      console.log("Calendar Days:", result?.days);

      setCalendarData({
        month: Number(result?.month) || selectedMonth,
        year: Number(result?.year) || selectedYear,
        days: Array.isArray(result?.days) ? result.days : [],
      });
    } catch (error) {
      console.error("Calendar API Error:", error);

      setCalendarData({
        month: selectedMonth,
        year: selectedYear,
        days: [],
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCalendarData();
  }, [selectedMonth, selectedYear]);

  const handlePrevMonth = () => {
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear((prev) => prev - 1);
    } else {
      setSelectedMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear((prev) => prev + 1);
    } else {
      setSelectedMonth((prev) => prev + 1);
    }
  };

  const handleToday = () => {
    const currentDate = new Date();

    setSelectedMonth(currentDate.getMonth() + 1);
    setSelectedYear(currentDate.getFullYear());

    setSelectedDate(
      `${currentDate.getFullYear()}-${String(
        currentDate.getMonth() + 1,
      ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`,
    );
  };

  return (
    <DashboardLayout>
      <div className="w-full p-4 md:p-6 xl:p-8 space-y-6">
        <CalendarHeader />

        {/* <CalendarToolbar /> */}

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <div className="xl:col-span-3 space-y-6">
            <CalendarGrid
              calendarData={calendarData}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
              onToday={handleToday}
              loading={loading}
            />
            <CalendarStatsFooter
              days={calendarData?.days || []}
              month={selectedMonth}
              year={selectedYear}
            />{" "}
          </div>

          <div className="space-y-6">
            <MonthlySummary calendarData={calendarData} loading={loading} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Calendar;
