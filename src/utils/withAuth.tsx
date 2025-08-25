import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";
import { type ComponentType, type ReactNode } from "react";
import { Navigate } from "react-router";

// Force children support
export function withAuth<P extends { children?: ReactNode }>(
  WrappedComponent: ComponentType<P>,
  requiredRole?: TRole,
): ComponentType<P> {
  return function AuthWrapper(props: P) {
    const { data, isLoading } = useUserInfoQuery(undefined);

    if (!isLoading && !data?.data?.email) {
      return <Navigate to="/" />;
    }

    if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
      return <Navigate to="/unauthorize" />;
    }

    return <WrappedComponent {...props} />;
  };
}
