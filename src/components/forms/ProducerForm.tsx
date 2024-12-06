"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { ProducerSchema, producerSchema } from "@/lib/formValidationSchemas";
import { createProducer, updateProducer } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useEffect, Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ProducerForm = ({
  type,
  data,
  setOpen,
}: {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProducerSchema>({
    resolver: zodResolver(producerSchema),
  });

  const [state, formAction] = useFormState(
    type === "create" ? createProducer : updateProducer,
    {
      success: false,
      error: false,
    }
  );
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    formAction(data);
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast(`Producer has been ${type === "create" ? "created" : "updated"}`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new Producer" : "Update the Producer"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">
        Producer Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Id Number"
          name="id"
          defaultValue={data?.id}
          register={register}
          error={errors?.id}
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

export default ProducerForm;
