/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useCurrentRideQuery,
  useUpdateStatusMutation,
} from "@/redux/features/driver/driver.api";
import { RideStatus, type RideStatusType } from "@/types/ride.type";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function OnGoingRide() {
  // Fetch current ride
  const { data, isLoading, isError } = useCurrentRideQuery(undefined);
  const ride = data?.data;

  const [status, setStatus] = useState<RideStatusType>(
    ride?.status || "REQUESTED",
  );
  const [cancellationReason, setCancellationReason] = useState("");
  const [updateStatus, { isLoading: isUpdating }] = useUpdateStatusMutation();

  useEffect(() => {
    if (ride?.status) {
      setStatus(ride.status);
    }
  }, [ride]);

  const handleUpdate = async () => {
    if (status === "CANCELLED" && !cancellationReason.trim()) {
      toast.error("Please provide a cancellation reason");
      return;
    }

    try {
      await updateStatus({
        rideId: ride._id,
        status,
        cancellationReason,
      }).unwrap();
      toast.success("Ride status updated successfully");
    } catch (err: any) {
      console.error(err);
      toast.error(err?.data?.message || "Failed to update ride status");
    }
  };

  if (isLoading) {
    return (
      <div className="py-20 bg-[linear-gradient(135deg,rgba(0,102,153,0.1),rgba(230,204,0,0.1))] min-h-screen">
        <div className="flex flex-col bg-white/70 gap-4 p-4 border border-gray-200 rounded-lg shadow-sm max-w-lg mx-auto">
          {/* Ride ID + Status */}
          <div className="flex justify-between items-center">
            <Skeleton className="h-4 w-32 rounded" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>

          {/* Ride details */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-2/3 rounded" />
            <Skeleton className="h-4 w-1/2 rounded" />
            <Skeleton className="h-4 w-1/3 rounded" />
            <Skeleton className="h-4 w-1/4 rounded" />
            <Skeleton className="h-4 w-1/2 rounded" />
          </div>

          {/* Update Status Title */}
          <Skeleton className="h-6 w-40 rounded mt-4" />

          {/* Select dropdown */}
          <Skeleton className="h-10 w-full rounded" />

          {/* Cancel reason (placeholder) */}
          <Skeleton className="h-10 w-full rounded" />

          {/* Button */}
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </div>
    );
  }

  if (isError || !ride) {
    return <p className="text-gray-500 p-20">No ongoing ride found</p>;
  }

  return (
    <div className="py-20 bg-[linear-gradient(135deg,rgba(0,102,153,0.1),rgba(230,204,0,0.1))] min-h-screen">
      <div className="flex flex-col bg-white/70 gap-4 p-4 border border-gray-200 rounded-lg shadow-sm max-w-lg mx-auto">
        <div className="flex justify-between">
          <p>
            <span className="font-medium">Ride ID:</span> {ride._id}
          </p>
          <p>
            <Badge
              className={`${
                ride.status === "COMPLETED"
                  ? "bg-green-500"
                  : ride.status === "CANCELLED"
                  ? "bg-red-500"
                  : ride.status === "ACCEPTED"
                  ? "bg-blue-500"
                  : ride.status === "PICKED_UP"
                  ? "bg-fuchsia-700"
                  : ride.status === "IN_TRANSIT"
                  ? "bg-amber-700"
                  : "bg-gray-500"
              } text-white px-3 py-1 rounded-lg`}
            >
              {ride.status}
            </Badge>
          </p>
        </div>
        <div>
          <p>
            <span className="font-medium">Pickup Location:</span>{" "}
            {ride.pickupLocation.address}
          </p>
          <p>
            <span className="font-medium">Destination:</span>{" "}
            {ride.destination.address}
          </p>
          <p>
            <span className="font-medium">Distance:</span> {ride.distance} km
          </p>
          <p>
            <span className="font-medium">Cost:</span> ${ride.estimatedCost}
          </p>
          <p>
            <span className="font-medium">Created At:</span>{" "}
            {new Date(ride.createdAt).toLocaleString()}
          </p>
        </div>
        <h2 className="text-blue-700 font-bold">Update Status :</h2>
        <Select
          value={status}
          onValueChange={(val: any) => setStatus(val as RideStatusType)}
        >
          <SelectTrigger className="w-full bg-slate-200 cursor-pointer px-4 font-bold text-lg">
            <SelectValue placeholder="Select ride status" />
          </SelectTrigger>
          <SelectContent className="w-full bg-slate-200 cursor-pointer font-bold text-lg">
            <SelectItem
              key={RideStatus.ACCEPTED}
              value={RideStatus.ACCEPTED}
              className="w-full bg-slate-200 cursor-pointer px-4 font-semibold text-[16px]"
            >
              Accepted
            </SelectItem>
            <SelectItem
              key={RideStatus.PICKED_UP}
              value={RideStatus.PICKED_UP}
              className="w-full bg-slate-200 cursor-pointer px-4 font-semibold text-[16px]"
            >
              Picked Up
            </SelectItem>
            <SelectItem
              key={RideStatus.IN_TRANSIT}
              value={RideStatus.IN_TRANSIT}
              className="w-full bg-slate-200 cursor-pointer px-4 font-semibold text-[16px]"
            >
              In Transit
            </SelectItem>
            <SelectItem
              key={RideStatus.COMPLETED}
              value={RideStatus.COMPLETED}
              className="w-full bg-slate-200 cursor-pointer px-4 font-semibold text-[16px]"
            >
              Completed
            </SelectItem>
            <SelectItem
              key={RideStatus.CANCELLED}
              value={RideStatus.CANCELLED}
              className="w-full bg-slate-200 cursor-pointer px-4 font-semibold text-[16px]"
            >
              Cancelled
            </SelectItem>
          </SelectContent>
        </Select>

        {status === "CANCELLED" && (
          <input
            type="text"
            placeholder="Enter cancellation reason"
            value={cancellationReason}
            onChange={(e) => setCancellationReason(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        )}

        <Button
          size="lg"
          onClick={handleUpdate}
          disabled={isUpdating}
          className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
        >
          {isUpdating ? "Updating..." : "Update Status"}
        </Button>
      </div>
    </div>
  );
}
