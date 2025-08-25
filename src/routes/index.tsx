import App from "@/App";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import Verify from "@/pages/auth/verify";
import About from "@/pages/public/about";
import Contact from "@/pages/public/contact";
import Faq from "@/pages/public/faq";
import Features from "@/pages/public/features";
import Home from "@/pages/public/home";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { role } from "@/constant/role";
import type { TRole } from "@/types";
import { driverSidebarItems } from "./driverSidebarItems";
import { riderSidebarItems } from "./riderSidebarItems";
import UnAuthorized from "@/pages/public/unAuthorized";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        path: "/", // this is your home page
        Component: Home,
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Features,
        path: "features",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        Component: Faq,
        path: "faq",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.superAdmin as TRole),
    path: "/admin-dashboard",
    children: [
      {
        path: "",
        element: <Navigate to="/admin-dashboard/analytics" replace />,
      },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.driver as TRole),
    path: "/driver-dashboard",
    children: [
      { index: true, element: <Navigate to="/driver-dashboard/online" /> },
      ...generateRoutes(driverSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.rider as TRole),
    path: "/rider-dashboard",
    children: [
      { index: true, element: <Navigate to="/rider-dashboard/book" /> },
      ...generateRoutes(riderSidebarItems),
    ],
  },
  {
    Component: LoginPage,
    path: "/login",
  },
  {
    Component: RegisterPage,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
  {
    Component: UnAuthorized,
    path: "/unauthorize",
  },
]);
