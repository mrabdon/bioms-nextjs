import FormContainer from "@/components/FormContainer";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, volumesData } from "@/lib/data";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { Prisma, Producer, Volume } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type VolumeList = Volume & { producer: Producer[] };
const columns = [
  {
    header: "Month",
    accessor: "month",
  },

  {
    header: "Commited Volume",
    accessor: "commitedVolume",
  },
  {
    header: "Actual Production",
    accessor: "actualProduction",
    className: "hidden lg:table-cell",
  },
  {
    header: "Beg Inventory",
    accessor: "begInventory`",
    className: "hidden lg:table-cell",
  },
  {
    header: "Total Stock",
    accessor: "totalStock",
    className: "hidden lg:table-cell",
  },
  {
    header: "Sold",
    accessor: "sold",
    className: "hidden lg:table-cell",
  },
  {
    header: "Unsold",
    accessor: "unsold",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
    className: "hidden lg:table-cell",
  },
];
const renderRow = (item: VolumeList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-ronMintGreen"
  >
    <td className="flex items-center gap-2 p-4">
      {item.date?.toString().slice(4, 16)}
    </td>
    <td>{item.committedVolume.toLocaleString()}</td>
    <td className="hidden md:table-cell ">
      {item.actualProduction.toLocaleString()}
    </td>
    <td className="hidden md:table-cell ">
      {item.begInventory.toLocaleString()}
    </td>
    <td className="hidden md:table-cell ">
      {item.totalStock.toLocaleString()}
    </td>
    <td className="hidden md:table-cell ">{item.sold.toLocaleString()}</td>
    <td className="hidden md:table-cell ">{item.unsold.toLocaleString()}</td>

    <td>
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <>
            <FormContainer table="volume" type="update" data={item} />
            <FormContainer table="volume" type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);
const VolumeListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;

  //URL PARAMS CONDITION

  let query: Prisma.VolumeWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            // Combine both conditions into a single query object
            query.OR = [];
            break;
          default:
            break;
        }
      }
    }
  }
  const [data, count] = await prisma.$transaction([
    prisma.volume.findMany({
      where: query,
      include: {
        producers: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.volume.count({ where: query }),
  ]);

  return (
    // <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
    //   {/* TOP */}
    //   <div className="flex items-center justify-between">
    //     <h1 className="hidden md:block text-lg font-semibold">All Volumes</h1>
    //     <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
    //       <div className="flex items-center gap-4 self-end">
    //         <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
    //           <Image src="/filter.png" alt="" width={14} height={14} />
    //         </button>
    //         <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
    //           <Image src="/sort.png" alt="" width={14} height={14} />
    //         </button>
    //         {role === "admin" && (
    //           // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
    //           //   <Image src="/plus.png" alt="" width={14} height={14} />
    //           // </button>
    //           <FormContainer table="volume" type="create" />
    //         )}
    //       </div>
    //     </div>
    //   </div>
    //   {/* LIST */}

    //   <div className="flex items-center justify-between g-4 ">
    //     <TableSearch />
    //     {/* Search and Sort */}
    //     <div className="flex items-center justify-between mb-4">
    //       <div className="relative">
    //         <input
    //           type="text"
    //           placeholder="Search"
    //           className="w-72 px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
    //         />
    //       </div>
    //       <div className="relative ">
    //         <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
    //           <option>Sort by: Joined</option>
    //           <option>Sort by: Username</option>
    //           <option>Sort by: Last signed in</option>
    //         </select>
    //       </div>
    //     </div>
    //   </div>

    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-gray-800">Users</h1>
          <p className="text-sm text-gray-500">View and manage users</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-200 mb-4 overflow-auto">
        <button className="pb-2 text-gray-800 font-medium border-b-2 border-purple-500">
          All
        </button>
        <button className="pb-2 text-gray-500 hover:text-gray-800">
          Invitations
        </button>
      </div>

      {/* Search and Sort */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
        <select className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none">
          <option>Sort by: Joined</option>
          <option>Sort by: Username</option>
          <option>Sort by: Last signed in</option>
        </select>

        <button className="px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-md hover:bg-purple-600 w-full md:w-auto">
          Create user
        </button>
      </div>

      {/* User Table */}
      <div className="bg-white shadow-sm rounded-lg">
        {/* Table Headers */}
        <div className="hidden sm:grid grid-cols-4 font-medium text-sm text-gray-500 border-b border-gray-200 p-4">
          <div>User</div>
          <div>Username</div>
          <div className="hidden lg:block">Last signed in</div>
          <div className="hidden lg:block">Joined</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-200">
          {/* Example User Row */}
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center text-sm text-gray-700 p-4 gap-y-4 sm:gap-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center">
                CD
              </div>
              <div>
                <p className="font-medium">Cardo Dalisay</p>
                <p className="text-gray-500 text-xs">cardo</p>
              </div>
            </div>
            <div>cardo</div>
            <div className="hidden lg:block">Yesterday at 2:14 PM</div>
            <div className="hidden lg:block">Yesterday at 8:30 AM</div>
          </div>

          {/* Additional rows */}
          <div className="grid grid-cols-1 sm:grid-cols-4 items-center text-sm text-gray-700 p-4 gap-y-4 sm:gap-y-0">
            <div className="flex items-center space-x-3">
              <Image
                src="/path-to-image.jpg"
                alt="User avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">Cardo Dalisay</p>
                <p className="text-gray-500 text-xs">user</p>
              </div>
            </div>
            <div>user</div>
            <div className="hidden lg:block">Yesterday at 10:59 AM</div>
            <div className="hidden lg:block">Last Tuesday at 10:57 AM</div>
          </div>
        </div>
      </div>
    </div>

    // <Table columns={columns} renderRow={renderRow} data={data} />
    // {/* PAGINATION */}
    // <Pagination page={p} count={count} />
  );
};

export default VolumeListPage;
