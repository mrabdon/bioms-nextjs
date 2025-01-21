import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Tabs from "@/components/Tabs";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import {
  Consumer,
  Prisma,
  Producer,
  Volume,
  VolumeSoldToProducer,
} from "@prisma/client";

type VolumeList = Volume & { producer: Producer } & { consumer: Consumer } & {
  volumeSoldToProducers: VolumeSoldToProducer[];
};

const renderRow = (item: VolumeList & { producer: Producer[] }) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 text-sm even:bg-slate-50 font-medium hover:bg-gray-100"
  >
    <td className="flex items-center gap-2 p-4">
      {" "}
      {new Date(item.createdAt)
        .toLocaleDateString("en-US", { year: "numeric", month: "short" })
        .split(" ")
        .reverse()
        .join(" ")}
    </td>
    <td>{item.producer.name} </td>
    <td className="hidden md:table-cell">
      {item.proposedVolume != null ? item.proposedVolume.toLocaleString() : "-"}
    </td>
    <td className="hidden md:table-cell">
      {new Date(item.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })}
    </td>
  </tr>
);

const CommittedPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const columns = [
    { header: "Month", accessor: "month", className: "p-4" },
    {
      header: "Producer",
      accessor: "producer",
      className: "",
    },
    {
      header: "Proposed Committed Volume",
      accessor: "committedVolume",
      className: "",
    },

    {
      header: "Date Created",
      accessor: "actualProduction",
      className: "hidden lg:table-cell",
    },
  ];

  const tabs = [
    { label: "Dashboard", value: "dashboard", link: "/admin" },
    {
      label: "Proposed Commitment",
      value: "proposed",
      link: "/admin/proposed",
    },
    { label: "Committed", value: "committed", link: "/admin/committed" },
  ];
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;

  let query: Prisma.VolumeWhereInput = {};

  const handleSort = (accessor: string, order: "asc" | "desc" | "") => {
    console.log(`Sorting ${accessor} in ${order} order.`);
    // Add sorting logic here (e.g., update state or fetch sorted data)
  };

  const [data, count] = await prisma.$transaction([
    prisma.volume.findMany({
      where: query,
      include: {
        producer: { select: { name: true } },
        consumer: { select: { name: true } },
        volumeSoldToProducers: {
          select: {
            soldAmount: true, // Correct placement of soldAmount
            consumers: { select: { name: true } },
            producers: { select: { name: true } },
          },
        },
        actualProduces: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.volume.count({ where: query }),
  ]);

  // ✅ Server-side rendering with no direct event handlers passed
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row bg-white border">
      <div className="w-full flex flex-col">
        <Tabs tabs={tabs} />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-gray-800">
              Proposed Committed Volumes
            </h1>
            <p className="text-sm text-gray-500">List</p>
          </div>
        </div>

        {/* Search, Sort, and Filter */}
        <div className="sm:flex sm:items-center justify-between mb-4 gap-4">
          <div className="flex gap-4 w-full">
            <TableSearch />
            {/* <FilterComponent /> */}
          </div>
        </div>

        {/* Data Table */}
        <Table columns={columns} renderRow={renderRow} data={data} />

        {/* Pagination */}
        <Pagination page={p} count={count} />
      </div>
    </div>
  );
};

export default CommittedPage;
