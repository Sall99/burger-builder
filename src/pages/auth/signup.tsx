import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInFormValues } from "@types";
import { Button, Input } from "components";
import { signUpFormSchema } from "utils";
import { Wrapper } from "./wrapper";

export const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: yupResolver(signUpFormSchema),
  });
  const onSubmit = (data: SignInFormValues) => console.log(data);
  return (
    <div className="flex justify-center">
      <div>
        <Wrapper h1="Create Account">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="full-name"
              type="text"
              placeholder="Full Name"
              register={register}
              errors={errors}
            />
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
    </div>
  );
};
