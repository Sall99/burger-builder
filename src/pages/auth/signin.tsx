import { Button, Input } from "components";
import { Wrapper } from "./wrapper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInFormSchema } from "utils";
import { SignInFormValues } from "@types";

export const Signin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: yupResolver(signInFormSchema),
  });
  const onSubmit = (data: SignInFormValues) => console.log(data);

  return (
    <div className="flex justify-center px-8 sm:px-16">
      <Wrapper h1="Sign In">
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button
            type="submit"
            label="Create Account"
            className="w-full h-10"
          />
        </form>
      </Wrapper>
    </div>
  );
};
