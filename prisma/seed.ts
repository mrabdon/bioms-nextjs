import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //PRODUCER
  await prisma.producer.create({
    data: {
      id: "2024000001",
      name: "San Carlos Bioenergy, Inc.",
      alias: "SCBI",
      address: "San Carlos City, Negros Occidental",
      feedstock: "Sugarcane",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.producer.create({
    data: {
      id: "2024000002",
      name: "Leyte Agri Corp.",
      alias: "LAC",
      address: "Ormoc City, Leyte",
      feedstock: "Molasses",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.producer.create({
    data: {
      id: "2024000003",
      name: "Roxol Bioenergy Corp.",
      alias: "RBC",
      address: "La Carlota City, Negros Occidental",
      feedstock: "Molasses",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.producer.create({
    data: {
      id: "2024000004",
      name: "Green Future Innovations, Inc.",
      alias: "GFII",
      address: "San Mariano, Isabela",
      feedstock: "Sugarcane",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.producer.create({
    data: {
      id: "2024000005",
      name: "Balayan Distillery, Incorporated",
      alias: "BDI",
      address: "Calaca, Batangas",
      feedstock: "Molasses",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.producer.create({
    data: {
      id: "2024000006",
      name: "Far East Alcohol Corporation",
      alias: "FEAC",
      address: "Apalit, Pampanga",
      feedstock: "Molasses",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.producer.create({
    data: {
      id: "2024000007",
      name: "Kooll Company Inc.",
      alias: "KCI",
      address: "Talisay City, Negros Occidental",
      feedstock: "Molasses",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.producer.create({
    data: {
      id: "2024000008",
      name: "Universal Robina Corporation",
      alias: "URC",
      address: "Bais City, Negros Oriental",
      feedstock: "Molasses",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.producer.create({
    data: {
      id: "2024000009",
      name: "Absolut Distillers Inc.",
      alias: "ADI",
      address: "Lian, Batangas",
      feedstock: "Molasses",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.producer.create({
    data: {
      id: "2024000010",
      name: "Progreen Agricorp Inc. - Nasugbu",
      alias: "PAIN",
      address: "Nasugbu, Batangas",
      feedstock: "Molasses",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.producer.create({
    data: {
      id: "2024000011",
      name: "Progreen Agricorp Inc. - Balayan",
      alias: "PAIB",
      address: "Nasugbu, Batangas",
      feedstock: "Molasses",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.producer.create({
    data: {
      id: "2024000012",
      name: "Victorias Milling Company, Inc.",
      alias: "VMCI",
      address: "Victorias City, Negros Occidental",
      feedstock: "Sugarcane",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.producer.create({
    data: {
      id: "2024000013",
      name: "Asian Alcohol Corporation",
      alias: "AAC",
      address: "Alijis Road Bacolod, Negros Occidental",
      feedstock: "Molasses",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });

  await prisma.consumer.create({
    data: {
      id: "2024000100",
      name: "Petron",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.consumer.create({
    data: {
      id: "2024000101",
      name: "Shell",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.consumer.create({
    data: {
      id: "2024000102",
      name: "Chevron",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.consumer.create({
    data: {
      id: "2024000103",
      name: "Total",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.consumer.create({
    data: {
      id: "2024000104",
      name: "Seaoil",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.consumer.create({
    data: {
      id: "2024000105",
      name: "Insular Oil",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.consumer.create({
    data: {
      id: "2024000106",
      name: "Flying V",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.consumer.create({
    data: {
      id: "2024000107",
      name: "Unioil",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.consumer.create({
    data: {
      id: "2024000108",
      name: "Phoenix",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.consumer.create({
    data: {
      id: "2024000109",
      name: "PTT",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.consumer.create({
    data: {
      id: "2024000110",
      name: "Jetti",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.consumer.create({
    data: {
      id: "2024000111",
      name: "Marubeni",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });
  await prisma.consumer.create({
    data: {
      id: "2024000112",
      name: "Filoil",
      createdAt: "2024-11-10T16:00:00+08:00",
    },
  });

  // //=====================VOLUME=============================
  //SCBI
  //JAN 2021
  // await prisma.volume.create({
  //   data: {
  //     actualProduceDate: new Date("2021-01-10T00:00:00Z"), // Set the date
  //     committedVolume: 3000000, // Example value
  //     actualProduction: 2865693, // Example value
  //     begInventory: 1619862, // Example value
  //     totalStock: 4485555, // Example value
  //     sold: 2746612, // Example value
  //     unsold: 1738943, // Example value
  //     volumeSoldToProducer: {
  //       create: [
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 2746612, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000100" }, // Link to existing Consumer by id
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });

  // await prisma.volume.create({
  //   data: {
  //     actualProduceDate: new Date("2021-02-10T00:00:00Z"), // Set the date
  //     committedVolume: 3000000, // Example value
  //     actualProduction: 2118959, // Example value
  //     begInventory: 1738943, // Example value
  //     totalStock: 3857902, // Example value
  //     sold: 2748335,
  //     unsold: 1109567, // Example value
  //     volumeSoldToProducer: {
  //       create: [
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 2748335, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000100" }, // Link to existing Consumer by id
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });

  // //March 2020
  // await prisma.volume.create({
  //   data: {
  //     actualProduceDate: new Date("2021-03-10T00:00:00Z"), // Set the date
  //     committedVolume: 3000000, // Example value
  //     actualProduction: 1565973, // Example value
  //     begInventory: 1109567, // Example value
  //     totalStock: 2675540, // Example value
  //     sold: 690516,
  //     unsold: 1985024, // Example value
  //     volumeSoldToProducer: {
  //       create: [
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 690516, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000105" }, // Link to existing Consumer by id
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });

  // //April 2020
  // await prisma.volume.create({
  //   data: {
  //     actualProduceDate: new Date("2021-04-10T00:00:00Z"), // Set the date
  //     committedVolume: 2800000, // Example value
  //     actualProduction: 3261489, // Example value
  //     begInventory: 1985024, // Example value
  //     totalStock: 5246513, // Example value
  //     sold: 2550206,
  //     unsold: 2696307, // Example value
  //     volumeSoldToProducer: {
  //       create: [
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 2550206, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000100" }, // Link to existing Consumer by id
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // //May 2020
  // await prisma.volume.create({
  //   data: {
  //     actualProduceDate: new Date("2021-05-10T00:00:00Z"), // Set the date
  //     committedVolume: 2800000, // Example value
  //     actualProduction: 2903312, // Example value
  //     begInventory: 2696307, // Example value
  //     totalStock: 5599619, // Example value
  //     sold: 4114641,
  //     unsold: 2550497,
  //     volumeSoldToProducer: {
  //       create: [
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 2550497, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000100" }, // Link to existing Consumer by id
  //           },
  //         },
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 1300144, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000104" }, // Link to existing Consumer by id
  //           },
  //         },
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 264000, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000105" }, // Link to existing Consumer by id
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // //June 2020
  // await prisma.volume.create({
  //   data: {
  //     actualProduceDate: new Date("2021-06-10T00:00:00Z"), // Set the date
  //     committedVolume: 2800000, // Example value
  //     actualProduction: 3360936, // Example value
  //     begInventory: 1484978, // Example value
  //     totalStock: 4845914, // Example value
  //     sold: 2686242,
  //     unsold: 2159672,
  //     volumeSoldToProducer: {
  //       create: [
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 2550242, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000100" }, // Link to existing Consumer by id
  //           },
  //         },
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 136000, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000105" }, // Link to existing Consumer by id
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // //July 2020
  // await prisma.volume.create({
  //   data: {
  //     actualProduceDate: new Date("2021-07-10T00:00:00Z"), // Set the date
  //     committedVolume: 0, // Example value
  //     actualProduction: 3230398, // Example value
  //     begInventory: 2159672, // Example value
  //     totalStock: 5390070, // Example value
  //     sold: 3749852,
  //     unsold: 1640218,
  //     volumeSoldToProducer: {
  //       create: [
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 2745777, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000100" }, // Link to existing Consumer by id
  //           },
  //         },
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 1004075, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000108" }, // Link to existing Consumer by id
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });

  // //Aug 2020
  // await prisma.volume.create({
  //   data: {
  //     actualProduceDate: new Date("2021-08-10T00:00:00Z"), // Set the date
  //     committedVolume: 1400000, // Example value
  //     actualProduction: 2343940, // Example value
  //     begInventory: 1640218, // Example value
  //     totalStock: 3984158, // Example value
  //     sold: 2706649,
  //     unsold: 1277509,
  //     volumeSoldToProducer: {
  //       create: [
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 1324716, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000100" }, // Link to existing Consumer by id
  //           },
  //         },
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 348880, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000105" }, // Link to existing Consumer by id
  //           },
  //         },
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 1033053, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000108" }, // Link to existing Consumer by id
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // //Sep 2021
  // await prisma.volume.create({
  //   data: {
  //     actualProduceDate: new Date("2021-09-10T00:00:00Z"), // Set the date
  //     committedVolume: 1300000, // Example value
  //     actualProduction: 1512696, // Example value
  //     begInventory: 1277509, // Example value
  //     totalStock: 2790205, // Example value
  //     sold: 1326927,
  //     unsold: 1463278,
  //     volumeSoldToProducer: {
  //       create: [
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 1275807, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000100" }, // Link to existing Consumer by id
  //           },
  //         },
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 51120, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000105" }, // Link to existing Consumer by id
  //           },
  //         },
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 1033053, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000108" }, // Link to existing Consumer by id
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });

  // //Oct 2021
  // await prisma.volume.create({
  //   data: {
  //     actualProduceDate: new Date("2021-10-10T00:00:00Z"), // Set the date
  //     committedVolume: 1800000, // Example value
  //     actualProduction: 1762284, // Example value
  //     begInventory: 1463278, // Example value
  //     totalStock: 3225562, // Example value
  //     sold: 1470671,
  //     unsold: 1754891,
  //     volumeSoldToProducer: {
  //       create: [
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 1274671, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000100" }, // Link to existing Consumer by id
  //           },
  //         },
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 196000, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000105" }, // Link to existing Consumer by id
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // //Nov 2021
  // await prisma.volume.create({
  //   data: {
  //     actualProduceDate: new Date("2021-11-10T00:00:00Z"), // Set the date
  //     committedVolume: 3000000, // Example value
  //     actualProduction: 2962063, // Example value
  //     begInventory: 1754891, // Example value
  //     totalStock: 4716954, // Example value
  //     sold: 3824559,
  //     unsold: 892395,
  //     volumeSoldToProducer: {
  //       create: [
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 3824559, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000100" }, // Link to existing Consumer by id
  //           },
  //         },
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 196000, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000105" }, // Link to existing Consumer by id
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
  // //Dec 2021
  // await prisma.volume.create({
  //   data: {
  //     actualProduceDate: new Date("2021-12-10T00:00:00Z"), // Set the date
  //     committedVolume: 3000000, // Example value
  //     actualProduction: 2688881, // Example value
  //     begInventory: 892395, // Example value
  //     totalStock: 3581276, // Example value
  //     sold: 3049351,
  //     unsold: 531925,
  //     volumeSoldToProducer: {
  //       create: [
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 2549132, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000100" }, // Link to existing Consumer by id
  //           },
  //         },
  //         {
  //           // This relates the created Volume to VolumeSoldToProducer
  //           soldAmount: 500219, // Amount sold
  //           producers: {
  //             connect: { id: "2024000001" }, // Link to existing Producer by id
  //           },
  //           consumers: {
  //             connect: { id: "2024000105" }, // Link to existing Consumer by id
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });

  //=================SCBI END =======================

  console.log("Seeding completed successfully.");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
