import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, usersData } from "@/lib/data";
import prisma from "@/lib/prisma";
import { Prisma, Producer, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { ITEM_PER_PAGE } from "@/lib/settings";
import FormContainer from "@/components/FormContainer";

type UserList = User & { producers: Producer[] };
const columns = [
  {
    header: "Username",
    accessor: "username",
    className: "",
  },
  {
    header: "Info",
    accessor: "info",
    className: "",
  },
  {
    header: "Role",
    accessor: "role",
    className: "hidden md:table-cell",
  },
  {
    header: "Company",
    accessor: "company",
    className: "hidden lg:table-cell",
  },
  ...(role === "admin"
    ? [
        {
          header: "Actions",
          accessor: "action",
        },
      ]
    : []),
];
const renderRow = (item: UserList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-ronSageGreen"
  >
    <td className="">{item.username}</td>

    <td className=" flex items-center gap-4 p-4">
      <Image
        src={item.img || "/noAvatar.png"}
        alt=""
        width={40}
        height={40}
        className=" md: hidden xl:block w-10 h-10 rounded-full object-cover "
      />
      <div className="flex flex-col">
        <h3 className="font-semibold">
          {item.name} {item.surname}
        </h3>
        <p className="text-xs text-gray-500">{item?.email}</p>
      </div>
    </td>

    <td className="hidden md:table-cell ">{item.role}</td>
    <td className="hidden lg:table-cell ">
      {item.producers.map((producer) => producer.name)}
    </td>

    <td>
      <div className="flex items-center gap-2">
        {/* <Link href={`/list/users/${item.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
            <Image src="/view.png" alt="" width={20} height={20} />
          </button>
        </Link> */}
        {role === "admin" && (
          // <button className="w-7 h-7 flex items-center junpm stify-center rounded-full bg-lamaPurple">
          //   <Image src="/delete.png" alt="" width={16} height={16} />
          // </button>
          <>
            <FormContainer table="user" type="update" data={item} />
            <FormContainer table="user" type="delete" id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);
const UserListPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;

  //URL PARAMS CONDITION

  let query: Prisma.UserWhereInput = {};

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "search":
            // Combine both conditions into a single query object
            query.OR = [{ name: { contains: value, mode: "insensitive" } }];
            break;
          default:
            break;
        }
      }
    }
  }

  const [data, count] = await prisma.$transaction([
    prisma.user.findMany({
      where: query,
      include: {
        producers: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.user.count({ where: query }),
  ]);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Users</h1>
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
              <FormContainer table="user" type="create" />
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
export default UserListPage;
