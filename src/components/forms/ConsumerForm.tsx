"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { ConsumerSchema, consumerSchema } from "@/lib/formValidationSchemas";
import { createConsumer, updateConsumer } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useEffect, Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ConsumerForm = ({
  type,
  data,
  setOpen,
}: {
  type: "create" | "update" | "createActual";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ConsumerSchema>({
    resolver: zodResolver(consumerSchema),
  });

  const [state, formAction] = useFormState(
    type === "create" ? createConsumer : updateConsumer,
    {
      success: false,
      error: false,
    }
  );

  // Function to generate ID
  const generateID = (): string => {
    const year = new Date().getFullYear(); // Get the current year
    const sequentialNumber = Math.floor(Math.random() * 1000000); // Generate a random 6-digit number
    const id = `${year}${String(sequentialNumber).padStart(6, "0")}`; // Format ID
    return id;
  };

  useEffect(() => {
    if (type === "create") {
      const generatedID = generateID(); // Generate ID if it's create type
      setValue("id", generatedID); // Set the ID value in the form
    }
  }, [type, setValue]);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    formAction(data);
  });
  const router = useRouter();
  useEffect(() => {
    if (state.success) {
      toast(`Consumer has been ${type === "create" ? "created" : "updated"}`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new Consumer" : "Update the Consumer"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">
        Consumer Information
      </span>
      <div className="flex flex-col gap-4">
        <InputField
          label="Id Number"
          name="id"
          defaultValue={data?.id}
          register={register}
          error={errors?.id}
          disabled={true}
          className="w-full"
        />
      </div>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />
      </div>

      {data && (
        <InputField
          label="Id"
          name="id"
          defaultValue={data?.id}
          register={register}
          error={errors?.id}
          hidden
          className="w-full"
        />
      )}
      {state.error && (
        <span className="text-red-500">Something went wrong!</span>
      )}
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ConsumerForm;
