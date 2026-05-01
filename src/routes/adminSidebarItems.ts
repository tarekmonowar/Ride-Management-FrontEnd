import AdminStatistics from "@/pages/dashboard/admin/adminStatistics";
import AllDrivers from "@/pages/dashboard/admin/allDrivers";
import AllRides from "@/pages/dashboard/admin/allRides";
import AllUsers from "@/pages/dashboard/admin/allUsers";
import AdminPaymentsDashboard from "@/pages/dashboard/admin/paymentsHistory";
import Settlements from "@/pages/dashboard/admin/settlements";
import type { ISidebarItem } from "@/types";
import {
  BarChart3,
  Car,
  CreditCard,
  Landmark,
  MapPin,
  Users,
} from "lucide-react";

export const adminSidebarItems: ISidebarItem[] = [
  {
    name: "Analytics",
    href: "/admin-dashboard/analytics",
    icon: BarChart3,
    component: AdminStatistics,
  },
  {
    name: "All Users",
    href: "/admin-dashboard/users",
    icon: Users,
    component: AllUsers,
  },
  {
    name: "All Drivers",
    href: "/admin-dashboard/drivers",
    icon: Car,
    component: AllDrivers,
  },
  {
    name: "All Rides",
    href: "/admin-dashboard/rides",
    icon: MapPin,
    component: AllRides,
  },
  {
    name: "Payments",
    href: "/admin-dashboard/payments",
    icon: CreditCard,
    component: AdminPaymentsDashboard,
  },
  {
    name: "Settlements",
    href: "/admin-dashboard/settlements",
    icon: Landmark,
    component: Settlements,
  },
];
