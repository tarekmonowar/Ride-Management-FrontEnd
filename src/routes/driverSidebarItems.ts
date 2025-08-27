import AvailableRides from "@/pages/dashboard/driver/availableRides";
import DriverRideHistory from "@/pages/dashboard/driver/driverRideHistory";
import DriverAvailability from "@/pages/dashboard/driver/updateAvailable";
import CurrentRideStatus from "@/pages/dashboard/driver/updateRideStatus";
import ContactPage from "@/pages/public/contact";
import type { ISidebarItem } from "@/types";
import { Car, DollarSignIcon, History, MapPin, MapPinPlus } from "lucide-react";

export const driverSidebarItems: ISidebarItem[] = [
  {
    name: "Go Online",
    href: "/driver-dashboard/online",
    icon: Car,
    component: DriverAvailability,
  },
  {
    name: "Available Rides",
    href: "/driver-dashboard/available-rides",
    icon: MapPin,
    component: AvailableRides,
  },
  {
    name: "Ongoing Ride",
    href: "/driver-dashboard/ongoing-ride",
    icon: MapPinPlus,
    component: CurrentRideStatus,
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
    component: DriverRideHistory,
  },
  // {
  //   name: "Vehicle",
  //   href: "/driver-dashboard/vehicle",
  //   icon: Car,
  //   component: ContactPage,
  // },
  // {
  //   name: "Profile",
  //   href: "/driver-dashboard/profile",
  //   icon: Settings,
  //   component: ContactPage,
  // },
];
