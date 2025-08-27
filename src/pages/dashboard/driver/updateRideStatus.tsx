/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useCurrentRideQuery,
  useUpdateStatusMutation,
} from "@/redux/features/driver/driver.api";
import { RideStatus, type RideStatusType } from "@/types/ride.type";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function CurrentRideStatus() {
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
    return <p className="text-gray-500">Loading current ride...</p>;
  }

  if (isError || !ride) {
    return <p className="text-gray-500 p-20">No ongoing ride found</p>;
  }

  return (
    <div className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg shadow-sm max-w-md mx-auto">
      <p>
        <span className="font-medium">Ride ID:</span> {ride._id}
      </p>
      <p>
        <span className="font-medium">Current Status:</span> {ride.status}
      </p>

      <Select
        value={status}
        onValueChange={(val: any) => setStatus(val as RideStatusType)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select ride status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key={RideStatus.ACCEPTED} value={RideStatus.ACCEPTED}>
            Accepted
          </SelectItem>
          <SelectItem key={RideStatus.PICKED_UP} value={RideStatus.PICKED_UP}>
            Picked Up
          </SelectItem>
          <SelectItem key={RideStatus.IN_TRANSIT} value={RideStatus.IN_TRANSIT}>
            In Transit
          </SelectItem>
          <SelectItem key={RideStatus.COMPLETED} value={RideStatus.COMPLETED}>
            Completed
          </SelectItem>
          <SelectItem key={RideStatus.CANCELLED} value={RideStatus.CANCELLED}>
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
  );
}
