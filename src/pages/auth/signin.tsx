import { Input } from "components";
import { Wrapper } from "./wrapper";

export const Signin = () => {
  return (
    <div className="flex justify-center">
      <div>
        <Wrapper h1="Sign In">
          <form action="">
            <Input name="email" type="email" placeholder="Email Address" />
            <Input name="password" type="password" placeholder="Password" />
          </form>
        </Wrapper>
      </div>
    </div>
  );
};
