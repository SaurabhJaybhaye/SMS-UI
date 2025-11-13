import PrivateLayout from "../layout/private/PrivateLayout";
import DashboardPage from "../pages/private/dashboard/DashboardPage";
import StudentsPage from "../pages/private/students/StudentsPage";
const PrivateRoutes = [
  {
    element: <PrivateLayout />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "students-list",
        element: <StudentsPage />,
      },
    ],
  },
];

export default PrivateRoutes;
