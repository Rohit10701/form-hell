"use client";
import InputWithRegister from "@/components/base/input-with-register";
import SelectWithRef from "@/components/base/select-with-ref";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z, ZodEnum, ZodType } from "zod";

const genderOptions = ["Male", "Female", "Others"] as const;
const basicFormSchema: ZodType<BasicFormProps> = z.object({
  firstName: z
    .string()
    .min(2, "first name should be at least 2 character long"),
  gender: z.enum(genderOptions),
});

interface BasicFormProps {
  firstName: string;
  gender: string;
  age: string;
}

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm<BasicFormProps>({
    resolver: zodResolver(basicFormSchema),
    defaultValues: {
      firstName: "Rohit Kumar",
    },
  });
  const onSubmit: SubmitHandler<BasicFormProps> = (data) => {
    setTimeout(() => {
      console.log(data);
    }, 2000);
  };
    return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*  input field with register */}
        <InputWithRegister
          name="firstName"
          register={register}
          errors={errors}
        />

        {/* select field with register */}
        <div className="flex flex-col">
          <select {...register("gender")} className="w-96">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {errors.gender && (
            <span className="text-red-600 font-medium ">
              {errors.gender.message}
            </span>
          )}
        </div>

        {/* select field with ref */}
        {/* <SelectWithRef label="age" {...register("age")}  /> */}
        <button type="submit">{isSubmitted ? "submitting" : "submit"}</button>
      </form>
    </>
  );
};

export default Page;
