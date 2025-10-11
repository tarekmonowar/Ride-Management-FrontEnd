import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import { type ComponentType, type ReactNode } from "react";
import { Navigate } from "react-router";
import { toast } from "sonner";

// Force children support
export function withAuth<P extends { children?: ReactNode }>(
  WrappedComponent: ComponentType<P>,
  requiredRole?: TRole,
): ComponentType<P> {
  return function AuthWrapper(props: P) {
    const { data, isLoading } = useUserInfoQuery(undefined);
    const user = data?.data;

    if (!isLoading && !user?.email) {
      toast.error("Please login first.");
      return <Navigate to="/login" />;
    }

    if (requiredRole && !isLoading && requiredRole !== user?.role) {
      return <Navigate to="/unauthorize" />;
    }

    return <WrappedComponent {...props} />;
  };
}
