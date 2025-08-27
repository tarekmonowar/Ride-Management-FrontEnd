export interface IRideRequest {
  pickupLocation: {
    lat: number;
    lng: number;
  };
  destination: {
    lat: number;
    lng: number;
  };
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
