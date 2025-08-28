import AvailableRides from "@/pages/dashboard/driver/availableRides";
import DriverRideHistory from "@/pages/dashboard/driver/driverRideHistory";
import DriverAvailability from "@/pages/dashboard/driver/updateAvailable";
import type { ISidebarItem } from "@/types";
import {
  AlertTriangle,
  Car,
  DollarSignIcon,
  History,
  MapPin,
  MapPinPlus,
  Settings,
} from "lucide-react";
import OnGoingRide from "@/pages/dashboard/driver/onGoingRide";
import EarningsDetails from "@/pages/dashboard/driver/earningsDetails";
import DriverProfileUpdate from "@/pages/dashboard/driver/driverProfile";
import SosButton from "@/pages/dashboard/driver/EmergencySOS";

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
    component: OnGoingRide,
  },
  {
    name: "Earnings",
    href: "/driver-dashboard/earnings",
    icon: DollarSignIcon,
    component: EarningsDetails,
  },
  {
    name: "Ride History",
    href: "/driver-dashboard/history",
    icon: History,
    component: DriverRideHistory,
  },
  {
    name: "Profile",
    href: "/driver-dashboard/profile",
    icon: Settings,
    component: DriverProfileUpdate,
  },
  {
    name: "Emergency SOS",
    href: "/driver-dashboard/emergency-sos",
    icon: AlertTriangle,
    component: SosButton,
  },
];
