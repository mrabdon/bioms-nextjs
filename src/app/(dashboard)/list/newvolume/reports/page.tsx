import CountChart from "@/components/CountChart";
import FormContainer from "@/components/FormContainer";
import Print from "@/components/Print";
import PrintableComponent from "@/components/Print";
import UsersTab from "@/components/UsersTab";
import prisma from "@/lib/prisma";
import { LineChart, PieChart } from "recharts";

const InvitationsPage = async () => {
  const allUsers = await prisma.volume.findMany();
  const invitations = await prisma.volume.findMany();
  const pieChartData = [
    { label: "Category A", value: 30 },
    { label: "Category B", value: 70 },
  ];
  const lineGraphData = [
    { x: "January", y: 100 },
    { x: "February", y: 150 },
  ];
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
          <p className="text-sm text-gray-500">Manage volume reports</p>
        </div>
      </div>
      <div className="sm:flex sm:items-center justify-between mb-4 gap-4">
        <div className="flex gap-4 flex-grow">
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <select className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
            <option>Filter by: Year </option>
            <option>Filter by: Quarter</option>
            <option>Filter by: Month</option>
          </select>
        </div>

        {/* <button className=" px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-md hover:bg-purple-600 sm:w-auto">
          Create user
        </button> */}
        {/* <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-md hover:from-purple-600 hover:to-blue-600">
          Create user
        </button> */}

        <button className="px-4 py-2 bg-gradient-to-b from-purple-500 to-purple-700 text-white text-sm font-medium rounded-md hover:from-purple-500 hover:to-purple-800">
          Print
        </button>
      </div>
      <UsersTab
        allUsers={allUsers}
        invitations={invitations}
        activeTab="Invitations"
      />
      <CountChart />

      <Print>
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CountChart />
        </div>
      </Print>
    </div>
  );
};

export default InvitationsPage;
