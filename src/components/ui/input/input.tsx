import { FC } from "react";
import { InputProps } from "@types";
import clsx from "clsx";

export const Input: FC<InputProps> = ({
  classname,
  type,
  placeholder,
  required,
  name,
  register,
  errors,
}) => {
  console.log(errors);

  return (
    <div className="inputField">
      <input
        type={type}
        {...(register ? register(name, { required }) : { name, required })}
        className={clsx(
          "border-b border-gray-200 w-full outline-none focus:outline-none mb-8 text-gray-100",
          [classname]
        )}
        placeholder=" "
      />
      <span className="text-sm">{placeholder}</span>
    </div>
  );
};
