export type { ISendOtp, IVerifyOtp, ILogin } from "./auth.type";
import type { ComponentType } from "react";
import { type LucideIcon } from "lucide-react";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ISidebarItem {
  name: string;
  href: string;
  icon: LucideIcon;
  component: ComponentType;
}

type ZodIssue = {
  code: string;
  expected: string;
  received: string;
  path: string[];
  message: string;
};

type ErrorSource = {
  path: string;
  message: string;
};

export interface IErrorResponse {
  success: boolean;
  message: string;
  errorSources?: ErrorSource[];
  err?: {
    issues: ZodIssue[];
    name: string;
  };
  stack?: string;
}

export type TRole = "SUPER_ADMIN" | "DRIVER" | "RIDER";
