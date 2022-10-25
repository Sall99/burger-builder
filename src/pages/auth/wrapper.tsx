import { FC } from "react";
import { Button, Icon } from "components";
import { WrapperProps } from "@types";
import { Link } from "react-router-dom";
import { publicRoutes } from "routes";

export const Wrapper: FC<WrapperProps> = ({ children, h1 }) => {
  return (
    <div className="m-14">
      <div>
        <h1 className="text-xl mb-6 tracking-wide text-primary-100 font-semibold">
          {h1}
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-9">
            <button className="log-with-btn">
              <Icon name="googleIcon" />
              <span>Login with Google</span>
            </button>
            <button className="log-with-btn">
              <Icon name="facebookIcon" />
              <span>Login with Facebook</span>
            </button>
          </div>
          <h1 className="mt-9 text-gray-400">- OR -</h1>
        </div>
      </div>
      {children}
      <Button label="Create Account" className="w-full h-10" />
      <h2 className="mt-5 text-xs text-gray-300 tracking-wider">
        Already have an account?{" "}
        <Link to={publicRoutes.signUp.path}>Log in</Link>
      </h2>
    </div>
  );
};
