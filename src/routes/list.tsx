import { BaseLayout } from "components";
import { Home, Signin, Signup } from "pages";
import { publicRoutes } from "./public";

export const routesList = [
  {
    path: publicRoutes.home.path,
    element: (
      <BaseLayout>
        <Home />
      </BaseLayout>
    ),
  },
  {
    path: publicRoutes.signIn.path,
    element: (
      <BaseLayout>
        <Signin />
      </BaseLayout>
    ),
  },
  {
    path: publicRoutes.signUp.path,
    element: (
      <BaseLayout>
        <Signup />
      </BaseLayout>
    ),
  },
];
