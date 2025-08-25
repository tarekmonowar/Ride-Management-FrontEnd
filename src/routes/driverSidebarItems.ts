import ContactPage from "@/pages/public/contact";
import type { ISidebarItem } from "@/types";
import { Car, DollarSignIcon, History, MapPin, Settings } from "lucide-react";

export const driverSidebarItems: ISidebarItem[] = [
  {
    name: "Go Online",
    href: "/driver-dashboard/online",
    icon: Car,
    component: ContactPage,
  },
  {
    name: "Ride Requests",
    href: "/driver-dashboard/requests",
    icon: MapPin,
    component: ContactPage,
  },
  {
    name: "Current Ride",
    href: "/driver-dashboard/current",
    icon: MapPin,
    component: ContactPage,
  },
  {
    name: "Earnings",
    href: "/driver-dashboard/earnings",
    icon: DollarSignIcon,
    component: ContactPage,
  },
  {
    name: "Ride History",
    href: "/driver-dashboard/history",
    icon: History,
    component: ContactPage,
  },
  {
    name: "Vehicle",
    href: "/driver-dashboard/vehicle",
    icon: Car,
    component: ContactPage,
  },
  {
    name: "Profile",
    href: "/driver-dashboard/profile",
    icon: Settings,
    component: ContactPage,
  },
];
