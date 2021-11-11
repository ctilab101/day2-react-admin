import { Navigate } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";

import Home from "./pages/Home";
import Customer from "./pages/Customer";
import CustomerEdit from "./pages/CustomerEdit";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

const routes = () => [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "customer", element: <Customer /> },
      { path: "customer/:id", element: <CustomerEdit /> },
      { path: "user", element: <User /> },
      { path: "404", element: <NotFound /> },
      { path: "/", element: <Home /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
