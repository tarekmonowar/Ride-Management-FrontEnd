export interface IRideRequest {
  pickupLocation: {
    lat: number;
    lng: number;
  };
  destination: {
    lat: number;
    lng: number;
  };
  vehicleType: "bike" | "car";
}

export interface IRide {
  _id: string;
  rider: string;
  driver?: string;
  pickupLocation: {
    address: string;
    lat: number;
    lng: number;
  };
  destination: {
    address: string;
    lat: number;
    lng: number;
  };
  status:
    | "REQUESTED"
    | "ACCEPTED"
    | "PICKED_UP"
    | "IN_TRANSIT"
    | "COMPLETED"
    | "CANCELLED";
  estimatedCost: number;
  distance: number;
  vehicleType?: "bike" | "car";
  paymentMethod?: "stripe" | "cash";
  paymentStatus?: "pending" | "paid" | "driver_confirmed";
  stripePaymentId?: string;
  isSettled?: boolean;
  requestedAt: string;
  createdAt: string;
  acceptedAt?: string;
  pickedUpAt?: string;
  completedAt?: string;
  cancelledAt?: string;
  cancellationReason?: string;
}

export interface CancelRidePayload {
  rideId: string;
  reason: string;
}
export type RideStatusType =
  | "REQUESTED"
  | "ACCEPTED"
  | "PICKED_UP"
  | "IN_TRANSIT"
  | "COMPLETED"
  | "CANCELLED";

export const RideStatus = {
  REQUESTED: "REQUESTED" as const,
  ACCEPTED: "ACCEPTED" as const,
  PICKED_UP: "PICKED_UP" as const,
  IN_TRANSIT: "IN_TRANSIT" as const,
  COMPLETED: "COMPLETED" as const,
  CANCELLED: "CANCELLED" as const,
};
