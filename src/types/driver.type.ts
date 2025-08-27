import type { IRide } from "./ride.type";

export interface IDriverEarnings {
  totalEarnings: number;
  totalRides: number;
  rides: IRide[];
}
