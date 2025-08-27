import ActiveRide from "@/pages/dashboard/Rider/activeRide";
import BookRide from "@/pages/dashboard/Rider/bookRide";
import RideHistory from "@/pages/dashboard/Rider/rideHistory";
import type { ISidebarItem } from "@/types";
import { Car, History, MapPin } from "lucide-react";

export const riderSidebarItems: ISidebarItem[] = [
  {
    name: "Book Ride",
    href: "/rider-dashboard/book",
    icon: Car,
    component: BookRide,
  },
  {
    name: "Active Ride",
    href: "/rider-dashboard/activeRide",
    icon: MapPin,
    component: ActiveRide,
  },
  {
    name: "Ride History",
    href: "/rider-dashboard/history",
    icon: History,
    component: RideHistory,
  },
  // {
  //   name: "Payment",
  //   href: "/rider-dashboard/payment",
  //   icon: CreditCard,
  //   component: FeaturesPage,
  // },
  // {
  //   name: "Profile",
  //   href: "/rider-dashboard/profile",
  //   icon: Settings,
  //   component: FeaturesPage,
  // },
];
