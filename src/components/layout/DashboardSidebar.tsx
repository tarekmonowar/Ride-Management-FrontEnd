import { cn } from "@/lib/utils";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Button } from "../ui/button";

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { data } = useUserInfoQuery(undefined);
  const user = data?.data;
  const location = useLocation();

  // const navigationItems = getNavigationItems();
  const navigationItems = getSidebarItems(user.role);

  // const navItems = sidebarItems.flatMap((section) => section.items);

  return (
    <div
      className={cn(
        "bg-card border-r border-border transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex h-full flex-col">
        {/* Toggle Button */}
        <div className="flex h-16 items-center justify-between px-4 border-b">
          {!isCollapsed && (
            <span className="text-sm font-medium text-muted-foreground">
              Navigation
            </span>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <Menu className="h-4 w-4" />
            ) : (
              <X className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 p-2">
          {navigationItems.map((item) => (
            <Link key={item.name} to={item.href}>
              <Button
                variant={
                  location.pathname === item.href ? "secondary" : "ghost"
                }
                className={cn("w-full justify-start", isCollapsed && "px-2")}
              >
                <item.icon className={cn("h-4 w-4", !isCollapsed && "mr-2")} />
                {!isCollapsed && <span>{item.name}</span>}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Driver Status (right after nav links) */}
        {!isCollapsed && user?.role === "DRIVER" && (
          <div className="border-t p-4">
            <div className="text-sm font-medium mb-2">Driver Status</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm text-muted-foreground">Online</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardSidebar;
