"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import InputField from "../InputField";
import Image from "next/image";
import {
  SubjectSchema,
  VolumeSchema,
  subjectSchema,
  volumeSchema,
} from "@/lib/formValidationSchemas";
import { createSubject, createVolume, updateVolume } from "@/lib/actions";
import { useFormState } from "react-dom";
import { useEffect, Dispatch, SetStateAction } from "react";
import { GiToaster } from "react-icons/gi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const VolumeForm = ({
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
  } = useForm<VolumeSchema>({
    resolver: zodResolver(volumeSchema),
  });

  const [state, formAction] = useFormState(
    type === "create" ? createVolume : updateVolume,
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
      toast(`Volume has been ${type === "create" ? "created" : "updated"}`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new Volume" : "Update the Volume"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">
        Volume Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Committed Volume"
          name="committedVolume"
          defaultValue={data?.committedVolume}
          register={register}
          error={errors?.committedVolume}
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

export default VolumeForm;
