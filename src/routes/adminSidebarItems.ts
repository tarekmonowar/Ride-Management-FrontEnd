import type { ISidebarItem } from "@/types";
import {
  BarChart3,
  Car,
  CreditCard,
  MapPin,
  Settings,
  Shield,
  Users,
} from "lucide-react";
import About from "@/pages/public/about";

export const adminSidebarItems: ISidebarItem[] = [
  {
    name: "Analytics",
    href: "/admin-dashboard/analytics",
    icon: BarChart3,
    component: About,
  },
  {
    name: "Users",
    href: "/admin-dashboard/users",
    icon: Users,
    component: About,
  },
  {
    name: "Drivers",
    href: "/admin-dashboard/drivers",
    icon: Car,
    component: About,
  },
  {
    name: "Rides",
    href: "/admin-dashboard/rides",
    icon: MapPin,
    component: About,
  },
  {
    name: "Payments",
    href: "/admin-dashboard/payments",
    icon: CreditCard,
    component: About,
  },
  {
    name: "Safety",
    href: "/admin-dashboard/safety",
    icon: Shield,
    component: About,
  },
  {
    name: "Settings",
    href: "/admin-dashboard/settings",
    icon: Settings,
    component: About,
  },
];
