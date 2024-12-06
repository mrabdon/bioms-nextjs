"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UserSchema, userSchema } from "@/lib/formValidationSchemas";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { createUser, updateUser } from "@/lib/actions";
import { useFormState } from "react-dom";
import { CldUploadWidget } from "next-cloudinary";
import * as React from "react";
import { useSignUp } from "@clerk/nextjs";

// interface UploadResult {
//   info: {
//     original_filename: string;
//     secure_url: string; // Add other properties if needed
//   };
// }

const UserForm = ({
  type,
  data,
  setOpen,
  relatedData,
}: {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const [img, setImg] = useState<any>();
  const [imgName, setImgName] = useState<any>();

  const [state, formAction] = useFormState(
    type === "create" ? createUser : updateUser,
    {
      success: false,
      error: false,
    }
  );
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    formAction({ ...data, img: img?.secure_url });
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast(`User has been ${type === "create" ? "created" : "updated"}`);
      setOpen(false);
      router.refresh();
    }
  }, [state, router, type, setOpen]);

  const { producers } = relatedData;

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new User" : "Update the User"}
      </h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div>

      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors.name}
        />
        <InputField
          label="Last Name"
          name="surname"
          defaultValue={data?.surname}
          register={register}
          error={errors.surname}
        />
        {/* <InputField
          label="Role"
          name="role"
          defaultValue={data?.role}
          register={register}
          error={errors.role}
        /> */}
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Gender</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("gender")}
            defaultValue={data?.gender}
          >
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
          {errors.gender?.message && (
            <p className="text-xs text-red-400">
              {errors.gender.message.toString()}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Role</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("role")}
            defaultValue={data?.role}
          >
            <option value="producer">Producer</option>
            <option value="consumer">Consumer</option>
          </select>
          {errors.role?.message && (
            <p className="text-xs text-red-400">
              {errors.role.message.toString()}
            </p>
          )}
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

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Producer</label>
          <select
            multiple
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("producers")}
            defaultValue={data?.producers}
          >
            {producers.map((producers: { id: string; name: string }) => (
              <option value={producers.id} key={producers.id}>
                {producers.name}
              </option>
            ))}
          </select>
          {errors.producers?.message && (
            <p className="text-xs text-red-400">
              {errors.producers.message.toString()}
            </p>
          )}
        </div>
      </div>
      {/* <CldUploadWidget
        uploadPreset="bioms-next"
        onSuccess={(result, { widget }) => {
          setImg(result.info);
          setImgName(result.info.original_filename);
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <div
              className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
              onClick={() => open()}
            >
              <Image src="/upload.png" alt="" width={28} height={28} />
              <span>Upload a photo</span>
            </div>
          );
        }}
      </CldUploadWidget> */}
      <CldUploadWidget
        uploadPreset="bioms-next"
        onSuccess={(result, { widget }) => {
          setImg(result.info);
          setImgName(result.info); // Save the image name
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <div className="text-xs text-gray-500 flex flex-col items-center gap-2 cursor-pointer">
              <div className="flex items-center gap-2" onClick={() => open()}>
                <Image src="/upload.png" alt="" width={28} height={28} />
                <span>Upload a photo</span>
              </div>
              {imgName && (
                <span className="text-sm text-green-500 mt-2">{`Uploaded`}</span>
              )}
            </div>
          );
        }}
      </CldUploadWidget>

      {state.error && (
        <span className="text-red-500">Something went wrong!</span>
      )}
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default UserForm;
