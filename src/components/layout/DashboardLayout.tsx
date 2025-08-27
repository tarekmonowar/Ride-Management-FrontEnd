import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  const { data } = useUserInfoQuery(undefined);
  const user = data?.data;

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1">
          {" "}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
