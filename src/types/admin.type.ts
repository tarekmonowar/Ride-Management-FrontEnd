export interface IRidePaymentSummary {
  totalCompletedRides: number;
  totalCompletedPayments: number;
  totalPendingRides: number;
  totalPendingPayments: number;
  cashTotal: number;
  stripeTotal: number;
  ridesByStatus: {
    [key in RideStatus]: {
      count: number;
      totalPayment: number;
    };
  };
}
export type RideStatus =
  | "REQUESTED"
  | "ACCEPTED"
  | "PICKED_UP"
  | "IN_TRANSIT"
  | "COMPLETED"
  | "CANCELLED";
