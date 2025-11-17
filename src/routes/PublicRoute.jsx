import PublicLayout from "../layout/public/PublicLayout";
import HomePage from "../pages/public/home/HomePage";
import LoginPage from "../pages/public/login/LoginPage";
import RegisterPage from "../pages/public/register/RegisterPage";
import { PUBLIC_ROUTES } from "../utils/constants";

const PublicRoute = [
  {
    path: PUBLIC_ROUTES.HOME,
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: PUBLIC_ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PUBLIC_ROUTES.SIGNUP,
        element: <RegisterPage />,
      },
    ],
  },
];

export default PublicRoute;
