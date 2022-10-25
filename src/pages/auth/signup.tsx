import { Input } from "components";
import { Wrapper } from "./wrapper";

export const Signup = () => {
  return (
    <div className="flex justify-center">
      <div>
        <Wrapper h1="Create Account">
          <form action="">
            <Input name="full-name" type="text" placeholder="Full Name" />
            <Input name="email" type="email" placeholder="Email Address" />
            <Input name="password" type="password" placeholder="Password" />
          </form>
        </Wrapper>
      </div>
    </div>
  );
};
