import ChartBox from "@/components/ChartBox";
import CountChart from "@/components/CountChart";
import FormContainer from "@/components/FormContainer";
import FormModal from "@/components/FormModal";
import UsersTab from "@/components/UsersTab";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { LineChart, PieChart } from "recharts";

const UsersPage = async () => {
  const allUsers = await prisma.volume.findMany();
  const invitations = await prisma.volume.findMany();
  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-gray-800">Volumes</h1>
          <p className="text-sm text-gray-500">View and manage volumes</p>
        </div>
      </div>

      {/* Search and Sort */}
      <div className="sm:flex sm:items-center justify-between mb-4 gap-4">
        <div className="flex gap-4 flex-grow">
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          <select className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
            <option>Sort by: Date </option>
            <option>Sort by: Committed Volume</option>
            <option>Sort by: Actual Production</option>
          </select>
        </div>

        {/* <button className=" px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-md hover:bg-purple-600 sm:w-auto">
          Create user
        </button> */}
        {/* <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium rounded-md hover:from-purple-600 hover:to-blue-600">
          Create user
        </button> */}

        <button className="px-4 py-2 bg-gradient-to-b from-purple-500 to-purple-700 text-white text-sm font-medium rounded-md hover:from-purple-500 hover:to-purple-800">
          Create volume
        </button>
        <FormContainer table="volume" type="create" />
      </div>

      <UsersTab allUsers={allUsers} invitations={invitations} activeTab="All" />
    </div>
  );
};

export default UsersPage;
