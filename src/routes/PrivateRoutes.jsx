import PrivateLayout from "../layout/private/PrivateLayout";
import DashboardPage from "../pages/private/dashboard/DashboardPage";
import StudentsPage from "../pages/private/students/StudentsPage";
import { PRIVATE_ROUTES } from "../utils/constants";
const PrivateRoutes = [
  {
    element: <PrivateLayout />,
    children: [
      {
        path: PRIVATE_ROUTES.DASHBOARD,
        element: <DashboardPage />,
      },
      {
        path: PRIVATE_ROUTES.STUDENTS,
        element: <StudentsPage />,
      },
    ],
  },
];

export default PrivateRoutes;
