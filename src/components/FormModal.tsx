"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { title } from "process";
import { useState } from "react";

const UserForm = dynamic(() => import("./forms/UserForm"), {
  loading: () => <h1>Loading...</h1>,
});

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});

const ProductForm = dynamic(() => import("./forms/ProductForm"), {
  loading: () => <h1>Loading...</h1>,
});

const FormForm = dynamic(() => import("./forms/FormForm"), {
  loading: () => <h1>Loading...</h1>,
});

const BidForm = dynamic(() => import("./forms/BidForm"), {
  loading: () => <h1>Loading...</h1>,
});
// const StudentForm = dynamic(() => import("./forms/StudentForm"), {
//   loading: () => <h1>Loading...</h1>,
// });

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  user: (type, data) => <UserForm type={type} data={data} />,
  product: (type, data) => <ProductForm type={type} data={data} />,
  form: (type, data) => <FormForm type={type} data={data} />,
  bid: (type, data) => <BidForm type={type} data={data} />,
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  // student: (type, data) => <StudentForm type={type} data={data} />
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "user"
    | "product"
    | "form"
    | "bid"
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete" | "reject" | "approve";
  data?: any;
  id?: number | string;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : type === "delete"
      ? "bg-ronRedLight"
      : type === "reject"
      ? "bg-ronRedLight"
      : "bg-lamaPurple";

  const typeTitle = type === "delete" ? "delete" : "del";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <span>{id}</span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "reject" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          Are you sure you want to reject this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Reject
        </button>
      </form>
    ) : type === "approve" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          Are you sure you want to accept this {table}?
        </span>
        <button className="bg-green-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Accept
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found!"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        title={`${typeTitle}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={20} height={20} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;