import { PrismaClient, UserGender } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ADMIN
  await prisma.admin.create({
    data: {
      id: "admin1",
      username: "admin1",
    },
  });
  await prisma.admin.create({
    data: {
      id: "admin2",
      username: "admin2",
    },
  });

  // COMPANY
  const companyData = [
    { name: "REMB" },
    { name: "OIMB" },
    { name: "EPAP" },
    { name: "SRA" },
  ];

  for (const company of companyData) {
    await prisma.company.create({ data: company });
  }

  // SUPERVISOR
  for (let i = 1; i <= 15; i++) {
    await prisma.supervisor.create({
      data: {
        id: `supervisor${i}`, // Unique ID for the supervisor
        username: `supervisor${i}`,
        name: `SupName${i}`,
        surname: `SupSurname${i}`,
        email: `supervisor${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address${i}`,
        bloodType: "A+",
        gender: i % 2 === 0 ? UserGender.MALE : UserGender.FEMALE,
        companies: { connect: [{ id: (i % 4) + 1 }] },
      },
    });
  }

  // EMPLOYEE
  for (let i = 1; i <= 50; i++) {
    await prisma.employee.create({
      data: {
        id: `employee${i}`,
        username: `employee${i}`,
        name: `SName${i}`,
        surname: `SSurname ${i}`,
        email: `employee${i}@example.com`,
        phone: `987-654-321${i}`,
        address: `Address${i}`,
        bloodType: "O-",
        sex: i % 2 === 0 ? UserGender.MALE : UserGender.FEMALE,
        // companyId: (i % 4) + 1,
      },
    });
  }


  // //  VOLUME
  //  for (let i = 1; i <= 50; i++) {
  //   await prisma.volume.create({
  //     data: {
  //       id: `employee${i}`,
      
  //     },
  //   });
  // }
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
