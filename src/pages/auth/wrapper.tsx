import { FC } from "react";
import { Button, Icon } from "components";
import { WrapperProps } from "@types";
import { Link, useLocation } from "react-router-dom";
import { publicRoutes } from "routes";

export const Wrapper: FC<WrapperProps> = ({ children, h1 }) => {
  const { pathname } = useLocation();

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
        {pathname === "/sign-up" ? (
          <span>
            Already have an account ?{" "}
            <Link
              to={publicRoutes.signIn.path}
              className="text-primary-100 hover:underline"
            >
              Sign in
            </Link>
          </span>
        ) : (
          <span>
            Do not have an account ?{" "}
            <Link
              to={publicRoutes.signUp.path}
              className="text-primary-100 hover:underline"
            >
              Sign up
            </Link>
          </span>
        )}
      </h2>
    </div>
  );
};
