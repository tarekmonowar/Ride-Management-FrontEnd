import type { ISidebarItem } from "@/types";

export const generateRoutes = (sidebarItems: ISidebarItem[]) => {
  return sidebarItems.map((route) => ({
    path: route.href,
    Component: route.component,
  }));
};
