import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { productsData, role, volumesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Volume = {
  id: number;
  companyName: string;
  availableVolume: string;
  bidOpenDate: string;
  bidCloseDate: string;
  startingBidAmount: string;
  status: string;
  location: string;
};
const columns = [
  // {
  //   header: "No.",
  //   accessor: "info",
  //   className: "text-center",
  // },
  {
    header: "Company Name",
    accessor: "company",
    className: "",
  },

  {
    header: "Avaliable Volume (Barrels)",
    accessor: "availableVolume",
    className: "hidden md:table-cell",
  },
  {
    header: "Bid Open Date",
    accessor: "bidOpen",
    className: "hidden lg:table-cell",
  },
  {
    header: "Bid Close Date",
    accessor: "bidClose",
    className: "hidden lg:table-cell",
  },
  {
    header: "Starting Bid Amount",
    accessor: "startingBid",
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
const VolumeListPage = () => {
  const renderRow = (item: Volume) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-ronMintGreen"
    >
      <td>{item.companyName}</td>
      <td className="hidden md:table-cell ">{item.availableVolume}</td>
      <td className="hidden md:table-cell ">{item.bidOpenDate}</td>
      <td className="hidden md:table-cell ">{item.bidCloseDate}</td>
      <td className="hidden md:table-cell ">{item.startingBidAmount}</td>
      <td className="hidden md:table-cell ">{item.status}</td>

      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/products/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={20} height={20} />
            </button>
          </Link>
          <Link href={`/list/products/${item.id}`}>
            <button
              className="w-7 h-7 flex items-center justify-center rounded-full bg-orange-400"
              title="bid"
            >
              <Image src="/bid.png" alt="" width={40} height={40} />
            </button>
          </Link>
          <Link href={`/list/products/${item.id}`}>
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
            <FormModal table="product" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );
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
              <FormModal table="product" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={volumesData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default VolumeListPage;
