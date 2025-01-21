import Announcements from "@/components/Announcements";
import EventCalendar from "@/components/EventCalendar";
import OverviewBox from "@/components/OverviewBox";
import OverviewCard from "@/components/OverviewCard";
import prisma from "@/lib/prisma";
import {
  FaUsers,
  FaFileInvoice,
  FaProjectDiagram,
  FaChartBar,
  FaBriefcase,
} from "react-icons/fa";

const ProducerPage = async ({
  searchParams,
  params, // Access 'params' directly for route params
}: {
  searchParams: { [keys: string]: string | undefined };
  params: { type: "producer" | "consumer" | "user" }; // Now correctly typed with 'params'
}) => {
  const { type } = params; // Access 'type' from 'params'

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

  const resultSold = totalSold._sum.soldAmount ? totalSold._sum.soldAmount : 0;
  const resultUnsold = totalUnsold._sum.unsold ? totalUnsold._sum.unsold : 0;
  const resultActual = totalActualProduction._sum.actualProduction
    ? totalActualProduction._sum.actualProduction
    : 0;

  const overviewData = [
    {
      title: "Sold",
      count: resultSold,
      formattedCount: `${resultSold.toLocaleString()} liters`,
      color: "#A3A3A3",
      icon: <FaChartBar className="text-white" />,
    },
    {
      title: "Unsold",
      count: resultUnsold,
      formattedCount: `${resultUnsold.toLocaleString()} liters`,
      color: "#3B82F6",
      icon: <FaFileInvoice className="text-white" />,
    },
    {
      title: "Actual Production",
      count: resultActual,
      formattedCount: `${resultActual.toLocaleString()} liters`,
      color: "#1E293B",
      icon: <FaBriefcase className="text-white" />,
    },
  ];

  // Sample data for other cards
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
              formattedCount={data.formattedCount}
            />
          ))}
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default ProducerPage;
