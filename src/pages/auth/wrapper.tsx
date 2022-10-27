import { FC } from "react";
import { Icon } from "components";
import { WrapperProps } from "@types";
import { Link, useLocation } from "react-router-dom";
import { publicRoutes } from "routes";

export const Wrapper: FC<WrapperProps> = ({ children, h1 }) => {
  const { pathname } = useLocation();
  return (
    <div className="mt-14 w-full md:w-auto">
      <div>
        <h1 className="text-xl mb-6 tracking-wide text-primary-100 font-semibold">
          {h1}
        </h1>
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-9">
            <button className="log-with-btn">
              <Icon name="googleIcon" />
              <span>Login with Google</span>
            </button>
            <button className="log-with-btn ">
              <Icon name="facebookIcon" />
              <span>Login with Facebook</span>
            </button>
          </div>
          <h1 className="mt-9 text-gray-400">- OR -</h1>
        </div>
      </div>
      <div>{children}</div>
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
