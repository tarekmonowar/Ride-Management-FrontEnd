import { role } from "@/constant/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { driverSidebarItems } from "@/routes/driverSidebarItems";
import { riderSidebarItems } from "@/routes/riderSidebarItems";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSidebarItems];
    case role.driver:
      return [...driverSidebarItems];
    case role.rider:
      return [...riderSidebarItems];
    default:
      return [];
  }
};
