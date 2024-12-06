import prisma from "@/lib/prisma";
import FormModal from "./FormModal";

export type FormContainerProps = {
  table: "subject" | "volume" | "producer" | "user" | "teacher";
  type: "create" | "update" | "delete" | "userTab";
  data?: any;
  id?: number | string;
};

const FormContainer = async ({ table, type, data, id }: FormContainerProps) => {
  let relatedData = {};

  if (type !== "delete") {
    switch (table) {
      case "user":
        const userProducers = await prisma.producer.findMany({
          select: { id: true, name: true },
        });
        relatedData = { producers: userProducers };
        break;

      case "volume":
        const users = await prisma.user.findMany({
          select: { id: true, name: true },
        });
        relatedData = { users: users };
        break;

      default:
        break;
    }
  }
  return (
    <div className="">
      <FormModal
        table={table}
        type={type}
        data={data}
        id={id}
        relatedData={relatedData}
      />
    </div>
  );
};

export default FormContainer;
