import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, volumesData } from "@/lib/data";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { Employee, Prisma, Volume } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type VolumeList = Volume & {employees: Employee[]} 
const columns = [ 
  // {
  //   header: "No.",
  //   accessor: "info",
  //   className: "text-center",
  // },
  {
    header: "Period (Year/Quarter)",
    accessor: "period",
    className: "",
  },

  {
    header: "Commited Volume",
    accessor: "commitedVolume",
    className: "hidden md:table-cell",
  },
  {
    header: "Created At",
    accessor: "createdAt",
    className: "hidden lg:table-cell",
  },
  {
    header: "Created By",
    accessor: "createdBy`",
    className: "hidden lg:table-cell",
  },
  {
    header: "Status",
    accessor: "status",
    className: "hidden lg:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
    className: "hidden lg:table-cell",
  },
];
const renderRow = (item: VolumeList) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-ronMintGreen"
    >
      <td className="flex items-center gap-2 p-4">{item.datePeriod}</td>
      <td className="hidden md:table-cell ">{item.committedVolume}</td>
      <td className="hidden md:table-cell ">{item.createdBy}</td>
      <td className="hidden md:table-cell ">{item.createdAt?.toString().slice(4,16)}</td>

      <td>
        <div className="flex items-center gap-2 p-2">
          <Link href={`/list/volumes/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={20} height={20} />
            </button>
          </Link>
          <Link href={`/list/volumes/${item.id}`}>
            <button
              className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-400"
              title="bid"
            >
              <Image src="/bid.png" alt="" width={40} height={40} />
            </button>
          </Link>
          <Link href={`/list/volumes/${item.id}`}>
            <button
              className="w-7 h-7 flex items-center justify-center rounded-full bg-ronSageGreen"
              title="commit"
            >
              <Image src="/commit.png" alt="" width={40} height={40} />
            </button>
          </Link>
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModal table="volume" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );
const VolumeListPage =async ({
  searchParams, }:{
    searchParams: {[key:string]: string|undefined};
  
}) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;

  //URL PARAMS CONDITION

  let query: Prisma.VolumeWhereInput  = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            // Combine both conditions into a single query object
            query.OR = [
                { datePeriod: { contains: value, mode: "insensitive" } },
                { createdBy: { contains: value, mode: "insensitive" } },
              ];         
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
        employees: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.volume.count({ where: query }),
  ]);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Volumes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              //   <Image src="/plus.png" alt="" width={14} height={14} />
              // </button>
              <FormModal table="volume" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* PAGINATION */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default VolumeListPage;
