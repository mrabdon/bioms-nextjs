import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { biofuelsData, role, usersData } from "@/lib/data";
import prisma from "@/lib/prisma";
import { Company, Employee } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type Biofuel = {
  id: number;
  controlNumber: number;
  companyName: string;
  nature: string;
  address: string;
  validity: string;
};
const columns = [
  {
    header: "No.",
    accessor: "itemNumber",
  },
  {
    header: "Control Number",
    accessor: "controlNumber",
    className: "",
  },
  {
    header: "Company Name",
    accessor: "company",
    className: "hidden md:table-cell",
  },
  {
    header: "Nature of Business",
    accessor: "nature",
    className: "hidden md:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden md:table-cell",
  },
  {
    header: "Validity of Accreditation",
    accessor: "validity",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
];
const BiofuelListPage = () => {
  const renderRow = (item: Biofuel) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-ronMintGreen"
    >
      <td className="text-center md:table-cell">{item.id}</td>
      <td className="flex items-center gap-4">{item.controlNumber}</td>

      <td className="hidden md:table-cell ">{item.companyName}</td>
      <td className="hidden md:table-cell ">{item.nature}</td>
      <td className="hidden md:table-cell ">{item.address}</td>
      <td className="hidden md:table-cell ">{item.validity}</td>
      
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/forms/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={20} height={20} />
            </button>
          </Link>
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModal table="form" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Forms</h1>
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
              <FormModal table="form" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={biofuelsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default BiofuelListPage;
