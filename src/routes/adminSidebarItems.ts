import AdminStatistics from "@/pages/dashboard/admin/adminStatistics";
import AllDrivers from "@/pages/dashboard/admin/allDrivers";
import AllRides from "@/pages/dashboard/admin/allRides";
import AllUsers from "@/pages/dashboard/admin/allUsers";
import AdminPaymentsDashboard from "@/pages/dashboard/admin/paymentsHistory";
import type { ISidebarItem } from "@/types";
import { BarChart3, Car, CreditCard, MapPin, Users } from "lucide-react";

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
  // {
  //   name: "Safety",
  //   href: "/admin-dashboard/safety",
  //   icon: Shield,
  //   component: About,
  // },
  // {
  //   name: "Settings",
  //   href: "/admin-dashboard/settings",
  //   icon: Settings,
  //   component: About,
  // },
];
