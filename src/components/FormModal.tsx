"use client";

import {
  deleteProducer,
  deleteSubject,
  deleteUser,
  deleteVolume,
} from "@/lib/actions";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { FormContainerProps } from "./FormContainer";

const deleteActionMap = {
  subject: deleteSubject,
  teacher: deleteSubject,
  volume: deleteVolume,
  producer: deleteProducer,
  user: deleteUser,
};
const UserForm = dynamic(() => import("./forms/UserForm"), {
  loading: () => <h1>Loading...</h1>,
});

const VolumeForm = dynamic(() => import("./forms/VolumeForm"), {
  loading: () => <h1>Loading...</h1>,
});

const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
  loading: () => <h1>Loading...</h1>,
});

const ProducerForm = dynamic(() => import("./forms/ProducerForm"), {
  loading: () => <h1>Loading...</h1>,
});

// const StudentForm = dynamic(() => import("./forms/StudentForm"), {
//   loading: () => <h1>Loading...</h1>,
// });

const forms: {
  [key: string]: (
    setOpen: Dispatch<SetStateAction<boolean>>,
    type: "create" | "update",
    data?: any,
    relatedData?: any
  ) => JSX.Element;
} = {
  subject: (setOpen, type, data, relatedData) => (
    <SubjectForm
      type={type}
      data={data}
      setOpen={setOpen}
      relatedData={relatedData}
    />
  ),
  user: (setOpen, type, data, relatedData) => (
    <UserForm
      type={type}
      data={data}
      setOpen={setOpen}
      relatedData={relatedData}
    />
  ),
  volume: (setOpen, type, data, relatedData) => (
    <VolumeForm
      type={type}
      data={data}
      setOpen={setOpen}
      // relatedData={relatedData}
    />
  ),

  // teacher: (setOpen, type, data, relatedData) => (
  //   <TeacherForm
  //     type={type}
  //     data={data}
  //     setOpen={setOpen}
  //     relatedData={relatedData}
  //   />
  // ),
  producer: (setOpen, type, data, relatedData) => (
    <ProducerForm
      type={type}
      data={data}
      setOpen={setOpen}
      // relatedData={relatedData}
    />
  ),
};

const FormModal = ({
  table,
  type,
  data,
  id,
  relatedData,
}: FormContainerProps & { relatedData?: any }) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : type === "delete"
      ? "bg-ronRedLight"
      : "bg-lamaPurple";

  const typeTitle = type === "delete" ? "delete" : "del";

  const [open, setOpen] = useState(false);

  const Form = () => {
    const [state, formAction] = useFormState(deleteActionMap[table], {
      success: false,
      error: false,
    });

    const router = useRouter();

    useEffect(() => {
      if (state.success) {
        toast(`${table} has been deleted!`);
        setOpen(false);
        router.refresh();
      }
    }, [state, router]);

    return type === "delete" && id ? (
      <form action={formAction} className="p-4 flex flex-col gap-4">
        <input type="text | number" name="id" value={id} hidden />
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this{" "}
          <span className=" text-center font-medium text-red-500"> {id}</span>{" "}
          {table}?
        </span>

        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](setOpen, type, data, relatedData)
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
