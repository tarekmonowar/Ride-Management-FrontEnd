/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useRideHistoryQuery } from "@/redux/features/ride/ride.api";
import {
  ArrowRight,
  Clock,
  DollarSign,
  MapPin,
  Navigation,
} from "lucide-react";
import { Link } from "react-router";

export default function RideHistory() {
  const { data, isLoading, isError } = useRideHistoryQuery(undefined);
  const rides = data?.data || [];

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
                  <span className="font-medium">{ride.cancellationReason}</span>
                </p>
              )}

              <p className="text-sm text-gray-500">
                Distance:{" "}
                <span className="font-medium">{ride.distance} km</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* CTA Section */}
      <section className="py-20 bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience All These Features
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying the benefits of
            RideManager's comprehensive feature set.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                variant="outline"
                className="rounded  bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:text-white"
              >
                Start Riding <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/register?role=driver">
              <Button
                size="lg"
                className="bg-white text-primary rounded hover:bg-white/90"
              >
                Become a Driver
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
