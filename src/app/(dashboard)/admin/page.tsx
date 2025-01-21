import { Dispatch, SetStateAction } from "react";
import { PrismaClient } from "@prisma/client";
import {
  FaUsers,
  FaFileInvoice,
  FaProjectDiagram,
  FaChartBar,
  FaBriefcase,
} from "react-icons/fa";
import Tabs from "@/components/Tabs";
import OverviewBox from "@/components/OverviewBox";
import MyBarChart from "@/components/BarChart";
import OverviewCard from "@/components/OverviewCard";
import EventCalendarContainer from "@/components/EventCalendarContainer";
import Announcements from "@/components/Announcements";

const prisma = new PrismaClient();

interface AdminPageProps {
  searchParams: { [key: string]: string | undefined };
  params: { type: "producer" | "consumer" | "user" }; // Modify this part
}

const AdminPage = async ({ searchParams, params }: AdminPageProps) => {
  // Use 'params' here
  const { type } = params; // Destructure the 'type' from 'params'

  const modelMap: Record<typeof type, any> = {
    producer: prisma.producer,
    consumer: prisma.consumer,
    user: prisma.user,
  };

  // Fetching data for each model
  const producersCount = await prisma.producer.count();
  const consumerCount = await prisma.consumer.count();
  const userCount = await prisma.user.count();

  const totalActualProduction = await prisma.actualProduce.aggregate({
    _sum: {
      actualProduction: true,
    },
  });

  const totalSold = await prisma.volumeSoldToProducer.aggregate({
    _sum: {
      soldAmount: true,
    },
  });

  const totalUnsold = await prisma.volume.aggregate({
    _sum: {
      unsold: true,
    },
  });

  const formattedTotalActualProduction = totalActualProduction._sum
    .actualProduction
    ? totalActualProduction._sum.actualProduction.toLocaleString()
    : "0";

  const resultActual = formattedTotalActualProduction;

  const formattedTotalSold = totalSold._sum.soldAmount
    ? totalSold._sum.soldAmount.toLocaleString()
    : "0";

  const resultSold = formattedTotalSold;

  const formattedTotalUnsold = totalUnsold._sum.unsold
    ? totalUnsold._sum.unsold.toLocaleString()
    : "0";

  const resultUnsold = formattedTotalUnsold;

  const tabs = [
    { label: "Dashboard", value: "dashboard", link: "/admin" },
    {
      label: "Proposed Commitment",
      value: "proposed",
      link: "/admin/proposed",
    },
    { label: "Committed", value: "committed", link: "/admin/committed" },
  ];

  const overviewData = [
    {
      title: "Producers",
      count: producersCount || 0, // Ensure count is a number
      formattedCount: `${producersCount || 0} producers`, // Separate formatted string
      color: "#FDBA74",
      icon: <FaUsers className="text-white" />,
    },
    {
      title: "Users",
      count: userCount || 0, // Ensure count is a number
      formattedCount: `${userCount || 0} users`, // Separate formatted string
      color: "#34D399",
      icon: <FaUsers className="text-white" />,
    },
    {
      title: "Oil Companies",
      count: consumerCount,
      formattedCount: `${consumerCount} oil companies`,
      color: "#FB7185",
      icon: <FaProjectDiagram className="text-white" />,
    },
    {
      title: "Unsold",
      count: parseInt(resultUnsold, 10), // Ensure count is a number
      formattedCount: resultUnsold, // Separate formatted string
      color: "#A3A3A3",
      icon: <FaChartBar className="text-white" />,
    },
    {
      title: "Sold",
      count: parseInt(resultSold, 10), // Ensure count is a number
      formattedCount: resultSold, // Separate formatted string
      color: "#3B82F6",
      icon: <FaFileInvoice className="text-white" />,
    },
    {
      title: "Actual Production",
      count: parseInt(resultActual, 10), // Ensure count is a number
      formattedCount: resultActual, // Separate formatted string
      color: "#1E293B",
      icon: <FaBriefcase className="text-white" />,
    },
  ];

  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row border bg-white">
      {/* LEFT */}
      <div className="w-full flex flex-col gap-8">
        <Tabs tabs={tabs} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {overviewData.map((data, index) => (
            <OverviewBox
              key={index}
              title={data.title}
              count={data.count}
              color={data.color}
              icon={data.icon}
              formattedCount={data.formattedCount}
            />
          ))}
        </div>

        <div className="w-full flex flex-col gap-2">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <OverviewCard title="Lifted Overview" items={[]} />
            <OverviewCard title="Unlifted Overview" items={[]} />
            <OverviewCard title="Actual Production Overview" items={[]} />
          </div>

          <div>
            <h1 className="text-2xl gap-4 p-4 font-bold text-gray-800">
              Volume
            </h1>
            <MyBarChart />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <div className="border border-gray-300 rounded-lg p-4">
          <EventCalendarContainer searchParams={searchParams} />
        </div>
        <div className="border border-gray-300 rounded-lg p-4">
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
