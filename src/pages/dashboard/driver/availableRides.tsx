/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  useAcceptRideMutation,
  useAvailableRidesQuery,
} from "@/redux/features/driver/driver.api";
import { Clock, DollarSign, MapPin, Navigation } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function AvailableRides() {
  const { data, isLoading, isError } = useAvailableRidesQuery(undefined);
  const rides = data?.data;

  const [acceptRide] = useAcceptRideMutation();
  const [loadingRideId, setLoadingRideId] = useState<string | null>(null);

  const handleAccept = async (rideId: string) => {
    try {
      setLoadingRideId(rideId);
      await acceptRide(rideId).unwrap();
      toast.success("Ride accepted successfully");
      setLoadingRideId(null);
    } catch (err: any) {
      console.error(err);
      toast.error(
        err?.data?.message || err?.message || "Failed to accept ride",
      );
      setLoadingRideId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 py-10 px-5">
        {[...Array(3)].map((_, i) => (
          <Card
            key={i}
            className="shadow-lg rounded-xl border border-gray-200 p-5"
          >
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-lg font-semibold">
                Loading Ride...
              </CardTitle>
              <Badge className="bg-gray-300 text-white px-3 py-1 rounded-lg">
                Loading
              </Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (isError || rides.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">No available rides found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 py-10 bg-[linear-gradient(135deg,rgba(0,102,153,0.05),rgba(230,204,0,0.05))] min-h-screen px-5">
      {rides.map((ride: any) => (
        <Card
          key={ride._id}
          className="shadow-lg rounded-xl border border-gray-200 px-5"
        >
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-lg font-semibold">
              Ride Details
            </CardTitle>
            <Badge
              className={`${
                ride.status === "REQUESTED"
                  ? "bg-blue-500"
                  : ride.status === "CANCELLED"
                  ? "bg-red-500"
                  : ride.status === "COMPLETED"
                  ? "bg-green-500"
                  : "bg-gray-500"
              } text-white px-3 py-1 rounded-lg`}
            >
              {ride.status}
            </Badge>
          </CardHeader>

          <CardContent className="space-y-3 text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500" />
              <p>
                <span className="font-medium">Pickup:</span>{" "}
                {ride.pickupLocation?.address || "Unknown"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Navigation className="w-5 h-5 text-green-600" />
              <p>
                <span className="font-medium">Destination:</span>{" "}
                {ride.destination?.address || "Unknown"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <p>
                <span className="font-medium">Estimated Cost:</span> $
                {ride.estimatedCost}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <p>
                <span className="font-medium">Requested At:</span>{" "}
                {new Date(ride.requestedAt).toLocaleString()}
              </p>
            </div>

            {ride.cancelledAt && (
              <p className="text-sm text-red-500">
                Cancelled At:{" "}
                <span className="font-medium">
                  {new Date(ride.cancelledAt).toLocaleString()}
                </span>
              </p>
            )}

            {ride.cancellationReason && (
              <p className="text-sm text-red-500">
                Reason:{" "}
                <span className="font-medium">{ride.cancellationReason}</span>
              </p>
            )}

            <p className="text-sm text-gray-500">
              Distance: <span className="font-medium">{ride.distance} km</span>
            </p>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleAccept(ride._id)}
              disabled={loadingRideId === ride._id}
              className="rounded  bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:text-white"
            >
              {loadingRideId === ride._id ? "Accepting..." : "Accept Ride"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
