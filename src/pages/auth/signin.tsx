import { Input } from "components";
import { Wrapper } from "./wrapper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInFormSchema } from "utils";
import { SignInFormValues } from "@types";

export const Signin = () => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm<SignInFormValues>({
    resolver: yupResolver(signInFormSchema),
  });
  const onSubmit = () => {
    const values = getValues();
    console.log("getvalues", values);
    console.log("errors:", errors);
  };

  return (
    <div className="flex justify-center">
      <div>
        <Wrapper h1="Sign In" onSubmit={onSubmit}>
          <>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              register={register}
              errors={errors}
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              register={register}
              errors={errors}
            />
          </>
        </Wrapper>
      </div>
    </div>
  );
};
