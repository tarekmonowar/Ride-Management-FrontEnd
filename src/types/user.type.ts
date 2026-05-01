export type ApplicationStatus = "pending" | "approved" | "rejected";
export type VehicleType = "bike" | "car";

export interface IVehicle {
  type?: VehicleType;
  make?: string;
  model?: string;
  color?: string;
  licensePlate?: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: "RIDER" | "DRIVER" | "SUPER_ADMIN";
  phone?: string;
  isApproved?: boolean;
  isBlocked?: boolean;
  isVerified?: boolean;
  applicationStatus?: ApplicationStatus;
  rejectionReason?: string;
  nidPhoto?: string;
  drivingLicensePhoto?: string;
  vehicle?: IVehicle;
  createdAt?: string;
  updatedAt?: string;
}
