import PublicLayout from "../layout/public/PublicLayout";
import HomePage from "../pages/public/home/HomePage";
import LoginPage from "../pages/public/login/LoginPage";
const PublicRoute = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];

export default PublicRoute;
