import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";

import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
// import EventCalendar from "@/components/EventCalendar";
// import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import {
  FaUsers,
  FaFileInvoice,
  FaProjectDiagram,
  FaChartBar,
  FaTasks,
  FaBriefcase,
} from "react-icons/fa";

const data = () => {
  const estimationItems = [
    { label: "Draft", count: 0, percentage: 0.0, color: "black" },
    { label: "Sent", count: 0, percentage: 0.0, color: "green" },
    { label: "Open", count: 0, percentage: 0.0, color: "blue" },
    { label: "Close", count: 0, percentage: 0.0, color: "red" },
  ];

  const invoiceItems = [
    { label: "Draft", count: 0, percentage: 0.0, color: "black" },
    { label: "Sent", count: 0, percentage: 0.0, color: "green" },
    { label: "Open", count: 0, percentage: 0.0, color: "blue" },
    { label: "Unpaid", count: 0, percentage: 0.0, color: "orange" },
    { label: "Partially Paid", count: 0, percentage: 0.0, color: "red" },
    { label: "Paid", count: 0, percentage: 0.0, color: "blue" },
  ];

  const projectItems = [
    { label: "Not Started", count: 0, percentage: 0.0, color: "blue" },
    { label: "On Hold", count: 0, percentage: 0.0, color: "green" },
    { label: "In Progress", count: 0, percentage: 0.0, color: "orange" },
    { label: "Canceled", count: 0, percentage: 0.0, color: "red" },
    { label: "Finished", count: 0, percentage: 0.0, color: "red" },
  ];

  const overviewData = [
    {
      title: "Producers",
      count: 0,
      color: "#FDBA74",
      icon: <FaUsers className="text-white" />,
    },
    {
      title: "Users",
      count: 0,
      color: "#34D399",
      icon: <FaUsers className="text-white" />,
    },
    {
      title: "Oil Companies",
      count: 0,
      color: "#FB7185",
      icon: <FaProjectDiagram className="text-white" />,
    },
    {
      title: "Unlifted",
      count: 0,
      color: "#A3A3A3",
      icon: <FaChartBar className="text-white" />,
    },
    {
      title: "Lifted",
      count: 0,
      color: "#3B82F6",
      icon: <FaFileInvoice className="text-white" />,
    },
    {
      title: "Actual Production",
      count: 0,
      color: "#1E293B",
      icon: <FaBriefcase className="text-white" />,
    },
  ];
};
const ConsumerPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col">
        {/* USER CARDS */}
        <div className="flex gap-2 justify-between flex-wrap"></div>

        <Announcements />
        {/* MIDDLE CHARTS */}

        {/* BOTTOM CHART */}
        <div className="w-full h-[500px]"></div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
      </div>
    </div>
  );
};

export default ConsumerPage;
