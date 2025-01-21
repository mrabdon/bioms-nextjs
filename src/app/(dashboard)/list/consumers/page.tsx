import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role } from "@/lib/data";
import prisma from "@/lib/prisma";
import { Consumer, Prisma, User } from "@prisma/client";
import { ITEM_PER_PAGE } from "@/lib/settings";
import FormContainer from "@/components/FormContainer";
import { auth } from "@clerk/nextjs/server";

type ConsumerList = Consumer & { users: User[] };

const renderRow = (item: ConsumerList) => (
  <tr
    key={item.id}
    className="border-b text-sm border-gray-200  font-medium hover:bg-gray-100"
  >
    <td className="items-center gap-2 p-4">{item.id}</td>
    <td className="items-center gap-2 p-4">{item.name}</td>
    <td>
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <>
            <FormContainer table="consumer" type="update" data={item} />
            <FormContainer table="consumer" type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);
const ConsumerListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const columns = [
    {
      header: "ID",
      accessor: "id",
      className: "hidden md:table-cell p-4",
    },

    {
      header: "OIL COMPANY NAME",
      accessor: "companyName",
      className: "p-4",
    },

    {
      header: "",
      accessor: "action",
      className: "",
    },
  ];
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;

  const { sessionClaims } = auth();
  const role = (sessionClaims?.metadata as { role?: string })?.role;

  //URL PARAMS CONDITION

  let query: Prisma.ConsumerWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            // Convert the value into a regex-like pattern and use contains for partial matching
            query.name = {
              contains: value, // Use the search value directly
              mode: "insensitive", // Case-insensitive search
            };
            break;
          default:
            break;
        }
      }
    }
  }
  const [data, count] = await prisma.$transaction([
    prisma.consumer.findMany({
      where: query,
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.consumer.count({ where: query }),
  ]);

  return (
    <div className="p-6 bg-white border min-h-screen">
      {/* TOP */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold text-gray-800">Oil Companies</h1>
          <p className="text-sm text-gray-500">View and manage consumers</p>
        </div>
      </div>

      {/* Search and Sort */}

      <div className="sm:flex sm:items-center justify-between mb-4 gap-4">
        <TableSearch />
        {role === "admin" && (
          // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
          //   <Image src="/plus.png" alt="" width={14} height={14} />
          // </button>
          <FormContainer table="consumer" type="create" />
        )}
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-500">{count} total consumers</p>
        </div>
      </div>

      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* PAGINATION */}
      <Pagination page={p} count={count} />
    </div>
  );
};
export default ConsumerListPage;
