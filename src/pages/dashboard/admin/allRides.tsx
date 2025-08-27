/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAllRidesQuery } from "@/redux/features/admin/admin.api";
import { Clock, DollarSign, MapPin, Navigation } from "lucide-react";

export default function AllRides() {
  const { data, isLoading, isError } = useAllRidesQuery(undefined);
  const rides = data?.data;
  console.log("rides", rides);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6 py-10 bg-[linear-gradient(135deg,rgba(0,102,153,0.1),rgba(230,204,0,0.1))] min-h-screen px-5">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Card
            key={idx}
            className="shadow-lg rounded-xl border border-gray-200 px-5 animate-pulse"
          >
            <CardHeader className="flex justify-between items-center">
              <Skeleton className="h-6 w-40 rounded" />
              <Skeleton className="h-6 w-20 rounded" />
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-500" />
                <Skeleton className="h-4 w-full rounded" />
              </div>
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-green-600" />
                <Skeleton className="h-4 w-full rounded" />
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-yellow-600" />
                <Skeleton className="h-4 w-1/2 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-500" />
                <Skeleton className="h-4 w-1/2 rounded" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (isError || rides.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">No ride history found</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-6 py-10 bg-[linear-gradient(135deg,rgba(0,102,153,0.1),rgba(230,204,0,0.1))] min-h-screen px-5">
        {rides.map((ride: any) => (
          <Card
            key={ride._id}
            className="shadow-lg rounded-xl border border-gray-200 px-5"
          >
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="text-lg font-semibold">
                Ride Details
              </CardTitle>
              <Badge
                className={`${
                  ride.status === "COMPLETED"
                    ? "bg-green-500"
                    : ride.status === "CANCELLED"
                    ? "bg-red-500"
                    : "bg-gray-500"
                } text-white px-3 py-1 rounded-lg`}
              >
                {ride.status}
              </Badge>
            </CardHeader>

            <div className="flex gap-3 justify-between">
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

                {ride.acceptedAt && (
                  <p className="text-sm text-gray-500">
                    AcceptedAt At:{" "}
                    <span className="font-medium">
                      {new Date(ride.acceptedAt).toLocaleString()}
                    </span>
                  </p>
                )}

                {ride.pickedUpAt && (
                  <p className="text-sm text-gray-500">
                    PickedUpAt At:{" "}
                    <span className="font-medium">
                      {new Date(ride.pickedUpAt).toLocaleString()}
                    </span>
                  </p>
                )}
                {ride.completedAt && (
                  <p className="text-sm text-gray-500">
                    Completed At:{" "}
                    <span className="font-medium">
                      {new Date(ride.completedAt).toLocaleString()}
                    </span>
                  </p>
                )}

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
                    <span className="font-medium">
                      {ride.cancellationReason}
                    </span>
                  </p>
                )}

                <p className="text-sm text-gray-500">
                  Distance:{" "}
                  <span className="font-medium">{ride.distance} km</span>
                </p>
              </CardContent>
              <div className="flex gap-2 flex-col pr-10">
                <div>
                  <p>
                    <span className="font-bold mr-1">Driver Name :</span>
                    {ride?.driver?.name}
                  </p>
                  <p>
                    <span className="font-bold mr-1">Driver Email :</span>
                    {ride?.driver?.email}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-bold mr-1">User Name :</span>
                    {ride?.rider?.name}
                  </p>
                  <p>
                    <span className="font-bold mr-1">User Email :</span>
                    {ride?.rider?.email}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
