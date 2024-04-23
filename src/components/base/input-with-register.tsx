import React from "react";
import {
  FieldErrors,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";
interface InputWithRegisterProps {
  register: (name: string, options?: RegisterOptions) => UseFormRegisterReturn;
  name: string;
  errors: FieldErrors | undefined;
}

const InputWithRegister = ({
  register,
  name,
  errors,
  ...props
}: InputWithRegisterProps) => {
  return (
    <>
      <div className="flex flex-col">
        <input
          {...register(name)}
          {...props}
          className="border-[1px] border-[#000] w-96"
        />
        {errors && errors[name] && (
          <span className="text-red-600 text-sm font-semibold">
            {errors[name]?.message}
          </span>
        )}
      </div>
    </>
  );
};

export default InputWithRegister;
