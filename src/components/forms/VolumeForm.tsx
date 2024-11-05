"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
    datePeriod: z.enum(["  January 10, 2024 - March 10, 2024", " April 10, 2024 - June 10, 2024","  July 10, 2024 - September 10, 2024","  October 10, 2024 - December 10, 2024"], { message: "Quarter info is required!" }),
    commitedVolume: z.string().min(1,{message: "Enter a value"}),
    createdAt: z.string().min(1, { message: "Regular price is required!" }),
    status: z.string().min(1, { message: "Product Description is required!" }),
    img: z.instanceof(File, { message: "Image is required" }),
  });
  

type Inputs = z.infer<typeof schema>;

const VolumeForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8 " onSubmit={onSubmit}>
    <h1 className="text-xl font-semibold">Create Volume</h1>
    <span className="text-xs text-gray-400 font-medium">
      Volume Information
    </span>
    <div className="flex justify-between flex-col gap-4 p-4 w-100%">
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Select Quarter</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("datePeriod")}
            defaultValue={data?.datePeriod}
          >
            <option value="1Q"> January 10, 2024 - March 10, 2024</option>
            <option value="2Q"> April 10, 2024 - June 10, 2024</option>
            <option value="3Q"> July 10, 2024 - September 10, 2024</option>
            <option value="4Q"> October 10, 2024 - December 10, 2024</option>
          </select>
          {errors.datePeriod?.message && (
            <p className="text-xs text-red-400">
              {errors.datePeriod.message.toString()}
            </p>
          )}
        </div>
      <InputField
        label="Committed Volume"
        name="committedVolume"
        type="number"
        defaultValue={data?.committedVolume}
        register={register}
        error={errors?.commitedVolume}
      />
      {/* <InputField
        label="Created At"
        name="createdAt"
        type="number"
        defaultValue={data?.regularPrice}
        register={register}
        error={errors?.regularPrice}
      />

      <InputField
        label="Product Description"
        name="productDescription"
        defaultValue={data?.productDescription}
        register={register}
        error={errors?.productDescription}
      /> */}
    </div>

    <button className="bg-blue-400 text-white p-2 rounded-md">
      {type === "create" ? "Create" : "Update"}
    </button>
  </form>
  );
};

export default VolumeForm;