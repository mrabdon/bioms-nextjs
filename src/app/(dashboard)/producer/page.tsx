import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";

import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import OverviewBox from "@/components/OverviewBox";
import OverviewCard from "@/components/OverviewCard";
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

const ProducerPage = () => {
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
    // {
    //   title: "Producers",
    //   count: 0,
    //   color: "#FDBA74",
    //   icon: <FaUsers className="text-white" />,
    // },
    // {
    //   title: "Users",
    //   count: 0,
    //   color: "#34D399",
    //   icon: <FaUsers className="text-white" />,
    // },
    // {
    //   title: "Oil Companies",
    //   count: 0,
    //   color: "#FB7185",
    //   icon: <FaProjectDiagram className="text-white" />,
    // },
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

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <h1 className="font-semibold gap-8 p-2">Dashboard</h1>
        {/* USER CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {overviewData.map((data, index) => (
            <OverviewBox
              key={index}
              title={data.title}
              count={data.count}
              color={data.color}
              icon={data.icon}
            />
          ))}
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* <h1 className="text-2xl font-semibold my-4 ">Reports <span className="text-blue-400">Overview</span></h1> */}
          <OverviewCard title="Lifted Overview" items={estimationItems} />
          <OverviewCard title="Unlifted Overview" items={invoiceItems} />
          <OverviewCard
            title="Actual Production Overview"
            items={projectItems}
          />
        </div>
        <div className="flex gap-4 justify-between flex-wrap"></div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row"></div>
        {/* BOTTOM CHART */}

        <div className="w-full flex flex-col gap-2"></div>
        <div className="w-full h-[500px]"></div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <Announcements />
        <EventCalendar />
      </div>
    </div>
  );
};

export default ProducerPage;
