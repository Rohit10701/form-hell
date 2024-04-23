"use client";
import React from "react";
import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface IFormInput {
  iceCreamType: { label: string; value: string };
}

const reactSelectSchema = z.object({
  iceCreamType: z.enum(["chocolate", "strawberry", "vanilla"]),
});
const Page = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(reactSelectSchema),
  });
  const onSubmit: SubmitHandler<object> = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="iceCreamType"
          control={control}
          render={({ field }) => (
            <Select
              placeholder="select ice-cream"
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
          )}
        />
        {errors.iceCreamType && (
          <span className="text-red-600 font-medium ">
            {errors?.iceCreamType?.message}
          </span>
        )}
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Page;

// "use client";
// import React from "react";
// import Select from "react-select";
// import { useForm, Controller, SubmitHandler } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// interface IFormInput {
//   iceCreamType: string;
// }

// const reactSelectSchema = z.object({
//   iceCreamType: z.enum(["chocolate", "strawberry", "vanilla"]),
// });

// const Page = () => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<IFormInput>({
//     defaultValues: {
//       iceCreamType: "vanilla",
//     },
//     resolver: zodResolver(reactSelectSchema),
//   });

//   const onSubmit: SubmitHandler<IFormInput> = (data) => {
//     console.log(data);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Controller
//           name="iceCreamType"
//           control={control}
//           render={({ field: { onChange, value } }) => (
//             <Select
//               options={[
//                 { value: "chocolate", label: "Chocolate" },
//                 { value: "strawberry", label: "Strawberry" },
//                 { value: "vanilla", label: "Vanilla" },
//               ]}
//               onChange={(selectedOption) => onChange(selectedOption?.value)}
//               value={{ value: value, label: value }}
//             />
//           )}
//         />
//         {errors.iceCreamType && (
//           <span className="text-red-600 font-medium ">
//             {errors.iceCreamType.message}
//           </span>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default Page;
