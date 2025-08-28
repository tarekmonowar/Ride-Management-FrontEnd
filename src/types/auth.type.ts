export interface ISendOtp {
  email: string;
}

export interface IVerifyOtp {
  email: string;
  otp: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export type TUpdateUser = {
  name?: string;
  phone?: string;
  role?: "ADMIN" | "DRIVER" | "USER";
  isVerified?: boolean;
  isApproved?: boolean;
  isAvailable?: boolean;
  vehicle?: {
    model: string;
    licensePlate: string;
  };
  address?: string;
};
