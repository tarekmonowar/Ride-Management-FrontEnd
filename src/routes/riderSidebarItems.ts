import ActiveRide from "@/pages/dashboard/Rider/activeRide";
import BookRide from "@/pages/dashboard/Rider/bookRide";
import RideHistory from "@/pages/dashboard/Rider/rideHistory";
import UserProfile from "@/pages/dashboard/Rider/userProfile";
import PaymentPage from "@/pages/dashboard/Rider/payment";
import type { ISidebarItem } from "@/types";
import {
  AlertTriangle,
  Car,
  CreditCard,
  History,
  MapPin,
  Settings,
} from "lucide-react";
import SosButton from "@/pages/dashboard/driver/EmergencySOS";

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
  {
    name: "Payment",
    href: "/rider-dashboard/payment",
    icon: CreditCard,
    component: PaymentPage,
  },
  {
    name: "Profile",
    href: "/rider-dashboard/profile",
    icon: Settings,
    component: UserProfile,
  },
  {
    name: "Emergency SOS",
    href: "/rider-dashboard/emergency-sos",
    icon: AlertTriangle,
    component: SosButton,
  },
];
