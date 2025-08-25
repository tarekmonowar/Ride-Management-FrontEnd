import FeaturesPage from "@/pages/public/features";
import type { ISidebarItem } from "@/types";
import { Car, CreditCard, History, MapPin, Settings } from "lucide-react";

export const riderSidebarItems: ISidebarItem[] = [
  {
    name: "Book Ride",
    href: "/rider-dashboard/book",
    icon: Car,
    component: FeaturesPage,
  },
  {
    name: "Current Ride",
    href: "/rider-dashboard/current",
    icon: MapPin,
    component: FeaturesPage,
  },
  {
    name: "Ride History",
    href: "/rider-dashboard/history",
    icon: History,
    component: FeaturesPage,
  },
  {
    name: "Payment",
    href: "/rider-dashboard/payment",
    icon: CreditCard,
    component: FeaturesPage,
  },
  {
    name: "Profile",
    href: "/rider-dashboard/profile",
    icon: Settings,
    component: FeaturesPage,
  },
];
